<template>
  <section>
    <ul v-for="item in newsData" @click="go_newsdetail(item)" class="tender_div1">
      <li class="over_width" v-html="item.title"></li>
      <li class="simple-ellipsis" v-html="item.content"></li>
    </ul>
    <infinite-loading spinner="bubbles" :on-infinite="onInfinite" ref="infiniteLoading">
    <span slot="no-more">
      暂无更多加载
    </span>
      <span slot="no-results">
      暂无结果
    </span>
    </infinite-loading>
  </section>
</template>

<script>
  import Util from '../../js/Util.js'
  import InfiniteLoading from 'vue-infinite-loading';
  let pageNo = 2
  export default {
    data () {
      return {
        newsData: ''
      }
    },
    components: {
      InfiniteLoading
    },
    methods: {
      go_newsdetail(item){
        let title = Util.Title_format(item.title)
        window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&_id=" + item.id;
      }, onInfinite(){
        let that = this;
        //招投标
        this.axios.get(this.Service.content_headline, {
          params: {
            type: 2,
            pageSize: 8,
            pageNo: pageNo
          }
        }).then(function (data) {
          setTimeout(() => {
            if (data.data.b.pageTotal == pageNo || data.data.b.pageSize >= data.data.b.dataTotal) {
              that.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
            if (data.data.b) {
              pageNo++
              for (let i = 0; i < data.data.b.data.length; i++) {
                data.data.b.data[i].content = Util.HTMLDecode(data.data.b.data[i].content).replace(/<[^>]+>/g, "").replace(/\s/g, "")
              }
              that.newsData = that.newsData.concat(data.data.b.data)
              that.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
          }, 700);
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    created(){
      if (window.localStorage.tender) {
        this.newsData = JSON.parse(window.localStorage.tender)
      }
    },
    mounted() {
      var that = this;
      //首页头条
      this.axios.get(this.Service.content_headline, {
        params: {
          type: 2,
          pageSize: 8,
          pageNo: 1
        }
      }).then(function (data) {
        if (data.data.b) {
          for (let i = 0; i < data.data.b.data.length; i++) {
            data.data.b.data[i].content = Util.HTMLDecode(data.data.b.data[i].content).replace(/<[^>]+>/g, "").replace(/\s/g, "")
          }
          console.log(data.data.b)
          that.newsData = data.data.b.data
          window.localStorage.tender = JSON.stringify(data.data.b.data)
        }
      }).catch(function (error) {
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../../style/variable.styl";
  .tender_div1 {
    margin: 0.15rem 0.15rem 0 0.15rem;
    padding: 0.15rem;
    background-color: #fff;
    border-radius: 0.027rem;
  }

  .tender_div1 li {
    color: #666;
    font-size: 0.14rem;
    margin-top: 0.058rem;
    line-height 0.2rem
  }

  .tender_div1 li:first-child {
    color: #333;
    font-size: 0.15rem;
    font-weight: bold;
    margin: 0;
  }

  .tender_div1:active {
    background-color $opacity_bgcolor
  }
</style>
