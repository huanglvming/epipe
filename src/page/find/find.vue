<template>
  <section class="padding_bottom_content">
    <img style="min-height:1.36rem" @click="go_newsdetail(banner)" :src=banner.imgUrl  class="banner_img" />
    <div @click="go_exhibition" class="find_con_div">
      <ul>
        <li class="find_color_div chose_blue_color">
        </li>
        <li class="find_color_div22">展会</li>
      </ul>
      <ul>
        <li class="find_color_div33">更多</li>
        <li>
          <svg style="width: 0.15rem;height: 0.15rem" class="icon" aria-hidden="false">
            <use xlink:href="#icon-into"></use>
          </svg>
        </li>
      </ul>
    </div>
    <div @click="go_newsdetail(exhibitionData)" class="exhit_div">
      <img v-if="exhibitionData.coverImg!=''"
           style="border-radius: 0.03rem;overflow: hidden;width: 100%;height: 1.83rem"
           :src=exhibitionData.coverImg|img_format
      />
      <img v-else="exhibitionData.coverImg!=''"
           style="border-radius: 0.03rem;overflow: hidden;width: 100%;height: 1.83rem" src="../../assets/pic3.png"/>
      <div>
        <span class="over_width">{{exhibitionData.title}}</span>
      </div>
    </div>


    <div @click="go_supply" class="find_con_div">
      <ul>
        <li class="find_color_div chose_red_color">
        </li>
        <li class="find_color_div22">供需</li>
      </ul>
      <ul>
        <li class="find_color_div33">更多</li>
        <li>
          <svg style="width: 0.15rem;height: 0.15rem" class="icon" aria-hidden="false">
            <use xlink:href="#icon-into"></use>
          </svg>
        </li>
      </ul>
    </div>
    <div @click="go_newsdetail(supplyData)">
      <ul class="tender_div1" v-for="(item,index) in supplyData" :key="index">
        <li v-html="item.title" class="item-title"></li>
        <li class="simple-ellipsis" v-html="item.content"></li>
      </ul>
    </div>


    <div @click="go_tender" class="find_con_div">
      <ul>
        <li class="find_color_div">
        </li>
        <li class="find_color_div22">招投标</li>
      </ul>
      <ul>
        <li class="find_color_div33">更多</li>
        <li>
          <svg style="width: 0.15rem;height: 0.15rem;color:red" class="icon" aria-hidden="false">
            <use xlink:href="#icon-into"></use>
          </svg>
        </li>
      </ul>
    </div>
    <div @click="go_newsdetail(tenderData)">
      <ul class="tender_div1" v-for="(item,index) in tenderData" :key="index">
        <li v-html="item.title" class="item-title"></li>
        <li class="simple-ellipsis" v-html="item.content"></li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Util from '../../js/Util.js'
  import store from '../../store/index'
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        banner: '',
        exhibitionData: {},
        supplyData: [],
        tenderData: [],
        loading: false
      }
    },
    components: {},
    created(){
      if (window.localStorage.exhibition) {
        this.exhibitionData = JSON.parse(window.localStorage.exhibition)[0]
      }
      if (window.localStorage.supply) {
        this.supplyData = JSON.parse(window.localStorage.supply)[0]
      }
      if (window.localStorage.tender) {
        this.tenderData = JSON.parse(window.localStorage.tender)[0]
      }
      if (window.localStorage.find_banner) {
        this.banner = JSON.parse(window.localStorage.find_banner)
      }
    },
    mounted(){
      let that = this;

      function getcontent_show() { //广告图
        return that.axios.get(that.Service.content_show + that.Service.queryString({type: 4, locationId: 40}));
      }

      function exhibition() {  //展会
        return that.axios.get(that.Service.content_headline + that.Service.queryString({type: 3, pageSize: 1}));
      }

      function supply() { //供需
        return that.axios.get(that.Service.content_headline + that.Service.queryString({type: 4, pageSize: 3}));
      }

      function tender() { //招投标
        return that.axios.get(that.Service.content_headline + that.Service.queryString({type: 2, pageSize: 3}));
      }
    /*
    * 一次性的把展会 供需 招投标
    * */
      that.axios.all([getcontent_show(), exhibition(), supply(), tender()]).then(that.axios.spread(function (banner, exhibitionData, supplyData, tenderData) {
        console.log("banner:",banner);
        console.log("exhibitionData:",exhibitionData);
        console.log("supplyData:",supplyData);
        console.log("tenderData:",tenderData);
        if (banner.data.b) {
            banner.data.b[0].imgUrl=banner.data.b[0].imgUrl+'?imageslim&imageView2/1/w/750/h/320'
            that.banner = banner.data.b[0]
            window.localStorage.find_banner = JSON.stringify(banner.data.b[0]);
          }
          if (exhibitionData.data.b) {
            that.exhibitionData = exhibitionData.data.b.data[0];
          }
          if (supplyData.data.b) {
            supplyData.data.b.data[0].content = Util.HTMLDecode(supplyData.data.b.data[0].content).replace(/<[^>]+>/g, "").replace(/\s/g, "")
            that.supplyData = supplyData.data.b.data
          }
          if (tenderData.data.b) {
            tenderData.data.b.data[0].content = Util.HTMLDecode(tenderData.data.b.data[0].content).replace(/<[^>]+>/g, "").replace(/\s/g, "")
            that.tenderData = tenderData.data.b.data;
          }
        }
      )).catch(function (error) {

      });
    },
    methods: {
      go_exhibition(){
        window.location.href = "epipe://?&mark=exhibition"
      },
      go_supply(){
        window.location.href = "epipe://?&mark=supply "
      },
      go_tender(){
        window.location.href = "epipe://?&mark=tender"
      },
      go_newsdetail(item){
        console.log(item.url)
        if (item.url) {
          if (item.url != "#") {
            let title = Util.Title_format(item.title)
            window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&url=" + item.url;
          }
        } else {
          console.log(item.id)
          let title = Util.Title_format(item.title)
          window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&_id=" + item.id;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../../style/variable.styl";
  .exhit_div {
    margin: 0.15rem 0.15rem 0 0.15rem;
    height: 1.83rem;
    position: relative;
    overflow: hidden;
    margin-top -0.005rem
  }
  .item-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .exhit_div div {
    height: 0.45rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    line-height: 0.45rem;
  }

  .exhit_div div span {
    color: #fff;
    font-size: 0.15rem;
    padding: 0 0.14rem 0 0.14rem;
  }

  .find_con_div {
    margin-top: 0.08rem;
    height: 0.44rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    align-items: center;
  }

  .find_con_div:active {
    opacity $opacity_common
  }

  .tender_div1:active {
    background-color $opacity_bgcolor
  }
  .tender_div1:not(:last-child){
    border-bottom: 1px solid #dedede;
  }
  .find_con_div > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .find_color_div {
    background-color: $green_color;
    width: 0.04rem;
    height: 0.24rem;
  }

  .find_color_div22 {
    margin-left: 0.1rem;
    font-size: 0.15rem;
    font-weight: bold;
  }

  .find_color_div33 {
    margin-right: 0.05rem;
    font-size: 0.15rem;
    color: #666;
  }

  .tender_div1 {
    margin: 0 0.15rem 0 0.15rem;
    padding: 0.15rem;
    background-color: #fff;
    border-radius: 0.027rem;
  }

  .tender_div1 li {
    color: #666;
    font-size: 0.13rem;
    margin-top: 0.058rem;
    line-height 0.2rem
  }

  .tender_div1 li:first-child {
    color: #333;
    font-size: 0.15rem;
    font-weight: bold;
    margin: 0;
  }

  .chose_blue_color
    background-color $blue_color

  .chose_green_color
    color $green_color

  .chose_red_color
    background-color $red_color
</style>
