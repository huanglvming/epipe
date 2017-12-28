<template>
  <div class="goods-con">
    <div class="detail-tab" ref="header">
      <ul>
        <li v-for="(item, index) in list" :class="{tabActive:selected==index}" @click="change(index)"><span>{{item.title}}</span></li>
      </ul>
    </div>
    <div class="tab-con" ref="conpart1"  v-if="showIndex === 0">
        <div class="goods-banner"></div>
        <div class="goods-des">
          <p>Google 的免费翻译服务可提供简体中文和另外多种语言之间的互译功能,可让您即时翻译字。</p>
          <div><span>￥</span><span>8888</span></div>
        </div>
        <div class="goods-spec">
          <ul>
            <li>
              <div class="spec-name">颜色</div>
              <div class="con-spec"><span>金色</span><span>深空灰</span></div>
            </li>
            <li>
              <div class="spec-name">数量</div>
              <div class="con-spec">
                <span><input type="button" value="-" disabled="disabled"></span><span><input type="text" value="1"></span><span><input
                type="button" value="+"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="goods-type">
          <ul>
            <li>
              <div>
                <p class="p1">123</p>
                <p class="p2">商品销量</p>
              </div>
            </li>
            <li>
              <div>
                <p class="p1">534</p>
                <p class="p2">商品评价</p>
              </div>
            </li>
            <li>
              <div>
                <p class="p1">545</p>
                <p class="p2">商品收藏</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <div class="tab-con" ref="conpart2" v-if="showIndex === 1">
      <div class="goods-spcpic"><img src="../../../assets/pic3.png" alt=""></div>
    </div>
    <div class="tab-con" ref="conpart3" v-if="showIndex === 2">
        <div class="comment" v-for="(item,index) in commentList" :key="index">
          <div class="user-info">
            <div class="pic"><img :src="item.avatar" alt=""></div>
            <div class="pho">{{item.phone}}</div>
            <div class="star">
              <i class="iconfont icon-star" v-for="(i,k) in item.stars" :key="k" />
            </div>
          </div>
          <div class="comment-con">{{item.comment}}</div>
          <div class="time">
            <div class="time-con">2017-12-23 15:36:58</div>
            <div class="thumps"><i class="iconfont icon-dianzan1"></i><i>12</i></div>
          </div>
        </div>
      </div>
    <div class="add-buy" ref="footer">
      <ul>
        <li>
          <div>收藏</div>
          <div>购物车</div>
        </li>
        <li>加入购物车</li>
        <li>立即购买</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export  default {
    data:function () {
      return{
        selected: 0,
        showIndex: 0,
        commentList:[
          {
              avatar: "../../../assets/tou.png",
              phone: "13333333333",
              stars: 5,
              comment: "不错啊！！！"
          },
          {
            avatar: "../../../assets/tou.png",
            phone: "13333333333",
            stars: 4,
            comment: "不错啊！！！"
          },
          {
            avatar: "../../../assets/tou.png",
            phone: "13333333333",
            stars: 3,
            comment: "不错啊！！！"
          },
        ],
        list: [
          {
            title: '商品',
          },
          {
            title: '详情',
          },
          {
            title: '评价',
          }
        ]
      }
    },
    mounted () {
      let headerH=window.getComputedStyle(this.$refs.header).height.replace("px","");
      console.log(headerH);
      let footerH=window.getComputedStyle(this.$refs.footer).height.replace("px","");
      console.log(footerH);
      let winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      console.log(winH);
      let conH=winH-headerH-footerH;
      this.$refs.conpart1.style.height = conH +'px';
      this.$refs.conpart2.style.height = conH +'px';
      this.$refs.conpart3.style.height = conH +'px';
    },
    methods: {
      change(index) {
        this.selected = index;
        this.showIndex = index;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
    width: 0px;
  }
  .detail-tab{
    width 100%;
    height .45rem;
    line-height .45rem;
    background #fff;
    border-bottom 1px solid #e5e5e5;
    position fixed;
    top 0;
    ul{
      li{
        width 33.333%;
        float left;
        text-align center;
        span{
          display inline-block;
          width .5rem;
          font-size .16rem;
          color #333;
        }
      }
      li.tabActive{
        span{
          height .44rem;
          color #ff8800;
          border-bottom 1px solid #ff8800;
        }
      }
    }
  }
  .add-buy{
    width 100%;
    height .49rem;
    line-height .49rem;
    position fixed;
    bottom 0;
    ul{
      li{
        width 33.333%;
        text-align center;
        float left;
        font-size .15rem;
        color #fff;
      }
      li:nth-child(1){
        height .48rem;
        line-height .48rem;
        border-top 1px solid #e5e5e5;
        background #fff;
        div{
          width 50%;
          float left;
          display flex;
          justify-content center;
          align-items center;
          font-size .12rem;
          color #666;
        }
      }
      li:nth-child(2){
        background #f19b37;
      }
      li:nth-child(3){
        background #d74a45;
      }
    }
  }
  .conNoActive{
    display none;
  }
  .conActive{
    display block;
  }
  .tab-con{
    margin-top .45rem;
    overflow-y scroll;
    .goods-banner{
      height 3.75rem;
      background #fff;
      border-bottom 1px solid #e5e5e5;
    }
    .goods-des{
      padding .15rem;
      background #fff;
      p{
        font-size .16rem;
        color #333;
        line-height .24rem;
        text-align justify;
      }
      div{
        margin-top .36rem;
        span{
          color #d74a45;
          font-size .16rem;
        }
        span:first-child{
          font-size .12rem;
        }
      }
    }
    .goods-spec{
      margin-top .1rem;
      padding .15rem;
      background #fff;
      ul{
        overflow hidden;
        li{
          margin-top .05rem;
          overflow hidden;
          div{
            float left;
          }
          .spec-name{
            width .4rem;
            height .3rem;
            line-height .3rem;
            text-align right;
            font-size .12rem;
            color #999;
            margin .1rem .1rem 0 0;
          }
          .con-spec{
            width calc(100% - .5rem);
            float left;
            span{
              display inline-block;
              height .28rem;
              line-height .28rem;
              border 1px solid #999;
              padding 0 .1rem;
              margin .1rem .1rem 0 0;
              font-size .14rem;
              color #333;
              border-radius 2px;
            }
          }
        }
        li:first-child{
          margin-top 0;
          .spec-name{
            margin-top 0;
          }
          span{
            margin-top 0;
          }
        }
        li:last-child{
          span{
            margin-right 0;
            border-radius 0;
            padding 0;
            input{
              background none;
              width .3rem;
            }
          }
          span:nth-child(2){
            border-left none;
            border-right none;
            input{
              width .5rem;
              text-align center;
            }
          }
        }
      }
    }
    .goods-type{
      height .9rem;
      margin .1rem 0;
      background #fff;
      ul{
        height 100%;
        overflow hidden;
        li{
          width 33.33%;
          height 100%;
          float left;
          display flex;
          justify-content center;
          align-items center;
          div{
            text-align center;
            width 100%;
            border-right 1px solid #e5e5e5;
            p{
              line-height 1.27;
            }
            .p1{
              font-size .16rem;
              color #333;
            }
            .p2{
              font-size .12rem;
              color #999;
              margin-top .06rem;
            }
          }
        }
        li:last-child{
          div{
            border-right none;
          }
        }
      }
    }
    .goods-spcpic{
      padding 0 .1rem;
      img{
        width 100%;
      }
    }
    .comment{
      overflow hidden;
      padding .15rem .15rem .12rem .15rem;
      border-bottom 1px solid #e5e5e5;
      .user-info{
        overflow hidden;
        div{
          float left;
          height .4rem;
          line-height .4rem;
        }
        .pic{
          width .4rem;
          border-radius 50%;
          margin-right .1rem;
          overflow hidden;
          img{
            width 100%;
          }
        }
        .pho{
          font-size .12rem;
          color #999;
          margin-right .15rem;
        }
        .star{
          i{
            color #ff8800;
            margin-right .04rem;
          }
        }
      }
      .comment-con{
        font-size .14rem;
        color #333;
        text-align justify;
        line-height .24rem;
        margin-top .08rem;
      }
      .time{
        margin-top .15rem;
        .time-con{
          float left;
          font-size .12rem;
          color #999;
        }
        .thumps{
          float right;
          i{
            font-style normal;
          }
          i:nth-child(1){
            font-size .14rem;
            //color #4c88ff;
          }
          i:nth-child(2){
            font-size .12rem;
            //color #4c88ff;
            margin-left .06rem;
          }
        }
      }
    }
  }
</style>
