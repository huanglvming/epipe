<template>
  <!--<vue-pull-refresh :on-refresh="onRefresh">-->
  <div>
    <section class="home">
      <!--<wc-swiper style="min-height: 1.59rem" @transitionend="transitionend">-->
        <!--<wc-slide v-for="(banner,value) in banners" :key="value">-->
          <!--<div>-->
            <!--<img style="width: 100%;display: block;" @click="go_newsdetail(banner)" :src=banner.imgUrl>-->
          <!--</div>-->
        <!--</wc-slide>-->
        <!--<pagination :dots="banners.length" :active="currentSlide" slot="pagination"/>-->
      <!--</wc-swiper>-->
      <div class="banner-wrapper">
        <carousel-3d :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :width="config.width" :height="config.height" :border="0" :perspective="0">
          <slide v-for="(banner,index) in banners" :key="index" :index="index">
            <img @click="go_newsdetail(banner)" :src=banner.imgUrl>
          </slide>
        </carousel-3d>
      </div>
      <ul class="home_nav_top">
        <li @click="go_exhibition">
          <div style="background: -webkit-linear-gradient(top, #51cdfc 0%,#27b1eb 100%);">
            <svg style="width: 0.22rem;height: 0.22rem" class="icon" aria-hidden="false">
              <use xlink:href="#icon-zhanhui"></use>
            </svg>
          </div>
          <div>展会</div>
        </li>
        <li @click="go_supply">
          <div style="background: -webkit-linear-gradient(top, #fc757e 0%,#fd535b 100%);">
            <svg style="width: 0.22rem;height: 0.22rem" class="icon" aria-hidden="false">
              <use xlink:href="#icon-gongxu"></use>
            </svg>
          </div>
          <div>供需</div>
        </li>
        <li @click="go_tender">
          <div style="background: -webkit-linear-gradient(top, #45e3b5 0%,#22be8e 100%);">
            <svg style="width: 0.22rem;height: 0.22rem" class="icon" aria-hidden="false">
              <use xlink:href="#icon-zhaotoubiao"></use>
            </svg>
          </div>
          <div>招投标</div>
        </li>
      </ul>
      <div class="home_title_con1">
        <div></div>
        <div>头条</div>
      </div>
      <div class="home_content_news-1" v-for="newsData_item in newsData">
        <ul v-if="newsData_item.coverImgUrl==''" @click="go_news(newsData_item)" class="home_title_con2">
          <li class="over_width" v-html="newsData_item.resTitle"></li>
          <li class="home_title_con3 simple-ellipsis" v-html="newsData_item.summary">
          </li>
          <li>
            <span>{{newsData_item.resTopNewsCategoryName}}</span>
            <span>&nbsp&nbsp&nbsp&nbsp{{newsData_item.resCreateDate | home_time_format}}</span>
            <span>&nbsp&nbsp&nbsp&nbsp <svg style="font-size: 0.15rem" class="icon" aria-hidden="false">
              <use xlink:href="#icon-yuedu"></use>
            </svg>：{{newsData_item.clicks}}</span>
          </li>
        </ul>
        <ul v-else="newsData_item.coverImg!=''" @click="go_news(newsData_item)" class="home_title_con4">
          <div><img v-bind:src=newsData_item.coverImgUrl|news_format width="100%"></div>
          <div>
            <div class="home_title_con5 over_width" v-html="newsData_item.resTitle"></div>
            <div class="home_title_con6 simple-ellipsis" v-html="newsData_item.summary"></div>
            <div class="home_title_con7 over_width">
              <span>{{newsData_item.resTopNewsCategoryName}}</span>
              <span>&nbsp {{newsData_item.resCreateDate | home_time_format}}</span>
              <span>&nbsp <svg style="font-size: 0.15rem" class="icon" aria-hidden="false">
              <use xlink:href="#icon-yuedu"></use>
            </svg>：{{newsData_item.clicks}}</span>
            </div>
          </div>
        </ul>
      </div>
      <infinite-loading spinner="bubbles" :on-infinite="onInfinite" ref="infiniteLoading">
    <span slot="no-more">
      暂无更多加载
    </span>
        <span slot="no-results">
      暂无结果
    </span>
      </infinite-loading>
    </section>
  </div>
</template>

<script>
  import Util from '../../js/Util.js'
  import InfiniteLoading from 'vue-infinite-loading';
  import Pagination from '../../components/Pagination.vue';
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  export default {
    data () {
      return {
        banners: [1, 2],
        newsData: [], //新闻列表
        currentSlide: 0,
        config:{
          width: 350,
          height: 180
        },
      }
    },
    components: {
      InfiniteLoading,
      Pagination,
      Carousel3d,
      Slide
    },
    methods: {
      onInfinite(){
        let that = this;
        //首页头条
        setTimeout(() => {
          that.axios.get(that.Service.host + that.Service.newHomeNews, {
            params: {
              pageSize: 10,
              lastId: that.newsData[(that.newsData.length) - 1].id
            }
          }).then(function (data) {
            console.log(data)
            if (data.data.b.length == 0) {
              console.log("加载完了")
              that.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            } else if (data.data.b) {
              that.newsData = that.newsData.concat(data.data.b)
              that.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
          })
        }, 200);
      },
      go_exhibition(){ //首页跳展会
        window.location.href = "epipe://?&mark=exhibition"
      },
      go_supply(){  //首页跳供需
        window.location.href = "epipe://?&mark=supply"
      },
      go_tender(){  //首页跳招投标
        window.location.href = "epipe://?&mark=tender"
      },
      go_newsdetail(item){
        if (item.h5Uri != "" && item.h5Uri) {
          let title = Util.Title_format(item.title)
          console.log("epipe://?&mark=newsdetail&title=" + title + "&url=" + item.h5Uri)
          window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&url=" + item.h5Uri;
        } else if (item.url) {
          if (item.url != "#") {
            console.log(item)
            let title = Util.Title_format(item.title)
            console.log("epipe://?&mark=newsdetail&title=" + title + "&url=" + item.url)
            window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&url=" + item.url;
          }
        } else {
          console.log("epipe://?&mark=newsdetail&title=" + title + "&_id=" + item.id)
          let title = Util.Title_format(item.title)
          window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&_id=" + item.id;
        }
      },
      go_news(item){
        let title = Util.Title_format(item.resTitle);
        window.location.href = `epipe://?&mark=newsdetail&title=${title}&_id=${item.resId}TTTTTT`
      },
      transitionend (current) {
        this.currentSlide = current;
      },
    },
    created(){
      if (window.localStorage.banners) {
        this.banners = JSON.parse(window.localStorage.banners)
      }
      if (window.localStorage.newsData) {
        this.newsData = JSON.parse(window.localStorage.newsData)
      }
      /*根据屏幕分辨率设置轮播图大小*/
      const deviceWidth = document.body.clientWidth;
      this.config.width = (deviceWidth/375)*350;
      this.config.height = (deviceWidth/375)*180;
    },
    mounted() {
      let that = this;
      //轮播图
      this.axios.get(this.Service.content_show, {params: {type: 1, locationId: 10}}).then(function (data) {
        console.log(data)
        if (data.data.b) {
          for (var i = 0; i < data.data.b.length; i++) {
            data.data.b[i].imgUrl = data.data.b[i].imgUrl + '?imageslim&imageView2/1/w/750/h/320'
          }
          that.banners = data.data.b
          window.localStorage.banners = JSON.stringify(data.data.b)
        }
      })
      //首页头条
      this.axios.get(this.Service.host + this.Service.newHomeNews, {
        params: {
          pageSize: 10,
          lastId: ""
        }
      }).then(function (data) {
        console.log(data)
        if (data.data.b) {
          that.newsData = data.data.b
          window.localStorage.newsData = JSON.stringify(that.newsData)
        }
      })
    },
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../../style/variable.styl";
  .wc-swiper-container {
    height auto
  }

  .wc-pagination .wc-dot-active {
    background $green_color
  }

  .swiper-slide
    .banner_img
      border none
      display block

  .banner-wrapper{
    overflow hidden;
    background: white;
  }
  .carousel-3d-container{
    margin 0;
  }
  .carousel-3d-slide img{
    display block;
    height: 100%;
  }
  .home_title_con7 {
    color: #999;
    font-size: 0.12rem;
    margin-top: 0.09rem;
  }

  .home_title_con6 {
    color: #666;
    font-size: 0.14rem;
    margin-top: 0.063rem;
    line-height 0.178rem
    min-height 0.345rem
  }

  .home_title_con5 {
    width: 100%;
    font-size: 0.15rem;
    font-weight: bold;
    margin-top: -0.01rem;
  }

  .home_title_con4 {
    background-color: #fff;
    padding: 4% 0 4% 0;
    margin-top: 4%;
    clear: both;
    height: 0.85rem;
  }

  .home_title_con4 > div:first-child {
    margin-left: 4%;
    width: 37.5%;
    border-radius: 0.025rem;
    height: 0.85rem;
    float: left;
    overflow: hidden;
    background-color: #fff;
  }

  .home_title_con4 > div:last-child {
    margin-right: 4%;
    width: 52.5%;
    float: left;
    margin-left: 2%;
  }

  .home_title_con2 {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 0.15rem;
    margin-top 0.15rem
  }

  .home_title_con2:active {
    background-color $opacity_bgcolor
  }

  .home_title_con4:active {
    background-color $opacity_bgcolor
  }

  .home_title_con2 li:first-child {
    font-size: 0.15rem;
    font-weight: bold;
  }

  .home_title_con3 {
    height 0.39rem
    font-size: 0.14rem;
    color: #666;
    margin-top: 0.08rem;
    line-height 0.2rem
  }

  .home_title_con2 li:last-child {
    margin-top: 0.15rem;
    font-size 0.12rem
    color $font_color_9
  }

  .home_title_con1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 0.475rem;
    margin-bottom -0.15rem
  }

  .home_title_con1 div:first-child {
    width: 0.04rem;
    height: 0.25rem;
    background-color: $orange_color;
    margin-left: 0.15rem;
  }

  .home_title_con1 div:last-child {
    margin-left: 0.08rem;
    font-size: 0.17rem;
  }

  .home_nav_top {
    display: flex;
    flex-direction: row;
    height: 0.96rem;
    align-items: center;
    background-color: #fff;
    padding 0 0.1rem 0 0.1rem
  }

  .home_nav_top li {
    flex: 1;
    font-size: 0.14rem;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /*padding-bottom 0.05rem*/
    padding 0.08rem 0 0.08rem 0
  }

  .home_nav_top
    li
      &:active
        background-color $opacity_bgcolor

  .home_nav_top li > div:first-child {
    width: 0.398rem;
    height: 0.398rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home_nav_top li div {
    display: flex;
    font-size: 0.13rem;
    margin-top: 0.05rem;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background-color $green_color
  }

  .swiper-pagination .swiper-pagination-bullet {
    height 0.025rem
    width 0.14rem
    border-radius 0.6rem
  }
</style>
