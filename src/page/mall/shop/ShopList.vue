<template>
  <div class="shop-cart">
    <div class="hea-ope" @click="listOperate">{{operate}}</div>
    <div class="one-shop">
      <div class="seller-shop-name"><i class="iconfont icon-weixuan"></i>优管自营</div>
      <div class="shop-goods">
        <div class="goods-ope"><i class="iconfont icon-weixuan"></i></div>
        <div class="goods-pho"><img src="../../../assets/tou.png" alt=""></div>
        <div class="goods-class">
          <P class="p1">苹果 iPhone X 64G 银色 公开版4G手机 公开版4G手机</P>
          <P class="p2"> 银色，公开版，64G</P>
          <section class="price-num">
            <section class="price"><i>￥</i>8488</section>
            <section class="num">
              <span><i class="iconfont icon-jian"></i></span>
              <span><input type="text" value="1"></span>
              <span><i class="iconfont icon-jia1"></i></span>
            </section>
          </section>
        </div>
      </div>
    </div>
    <div class="settlement">
      <div class="sel-all">
        <div><i class="iconfont icon-weixuan"></i></div>
        <div>全选</div>
      </div>
      <div class="tot-price" v-if="showIndex==0">
        <div class="tot-price-btn">去结算<i>(2件)</i></div>
        <div class="tot-price-num">总计：<i>￥8888.00</i></div>
      </div>
      <div class="tot-price" v-if="showIndex==1">
        <div class="manage-shops">删除</div>
        <div class="manage-shops">移入收藏</div>
      </div>
    </div>
    <footer-tab :category="2"></footer-tab>
  </div>
</template>
<script>
  document.title="购物车";
  import FooterTab from "../../../components/mall/FooterTab.vue";
  document.title="购物车";
  export  default{
    components:{
      FooterTab,
    },
    data: function () {
      return {
        operate:'编辑商品',
        showIndex:0
      }
    },
    methods:{
      listOperate(){
        if(this.showIndex===0){
          this.operate='完成';
          this.showIndex=1;
        }else{
          this.operate='编辑商品';
          this.showIndex=0;
        }
      },
      //获取购物车列表信息
      getCartList(){
        this.axios.post(this.baseURL.mall + "/m/authc/cart/myCart").then(res=>{
          console.log('购物车信息',res);
        })
      }
    },
    created(){
      this.getCartList();
    }
  }
</script>
<style lang="stylus" scoped>
  .shop-cart{
    overflow hidden;
    .hea-ope{
      height .45rem;
      line-height .45rem;
      background #fff;
      color #ff8800;
      text-align right;
      padding-right .15rem;
      font-size .14rem;
    }
    .one-shop{
      margin-top .1rem;
      background #fff;
      .seller-shop-name{
        height .45rem;
        line-height .45rem;
        font-size .16rem;
        color #333;
        border-bottom 1px solid #e5e5e5;
        i{
          margin 0 .1rem;
          font-size .24rem;
          vertical-align middle;
        }
      }
      .shop-goods{
        overflow hidden;
        height 1.35rem;
        border-bottom 1px solid #e5e5e5;
        div{
          float left;
          margin-right .1rem;
        }
        .goods-ope{
          margin-left .1rem;
          margin-top .43rem;
          i{
            font-size .24rem;
          }
        }
        .goods-pho{
          width .8rem;
          height .8rem;
          margin-top .15rem;
          img{
            display block;
            width 100%;
            height 100%;
          }
        }
        .goods-class{
          margin-right 0;
          padding-right .1rem;
          box-sizing border-box;
          width calc(100% - 1.34rem);
          margin-top .15rem;
          .p1{
            font-size .14rem;
            color #333;
            line-height .2rem;
          }
          .p2{
            font-size .14rem;
            color #999;
            margin-top .08rem;
          }
          .price-num{
            overflow hidden;
            height .3rem;
            line-height: .3rem;
            margin-top .1rem;
            .price{
              float left;
              color #d74a45;
              font-size .16rem;
              i{
                font-style normal;
                font-size .12rem;
              }
            }
            .num{
              font-size 0;
              float right;
              span{
                display inline-block;
                width .29rem;
                height .29rem;
                border-radius 2px;
                background #f7f7f7;
                text-align center;
                line-height .29rem;
                margin-right .01rem;
              }
              span:nth-child(2){
                width .49rem;
              }
              span:last-child{
                margin-right 0;
              }
              input{
                width 100%;
                height .29rem;
                border-radius 2px;
                text-align center;
                background #f7f7f7;
              }
              input:focus{
                outline none;
              }
            }
          }
        }
      }
      .shop-goods:last-child{
        border-bottom none;
      }
    }
    .settlement{
      width 100%;
      height .49rem;
      background #fff;
      border-top 1px solid #e5e5e5;
      position fixed;
      bottom 50px;
      .sel-all{
        float left;
        text-align center;
        margin-left .1rem;
        position relative;
        top 50%;
        transform translateY(-50%);
        div:first-child{
          i{
            font-size .24rem;
          }
        }
        div:last-child{
          font-size .12rem;
          color #999;
        }
      }
      .tot-price{
        float right;
        height 100%;
        div{
          float right;
        }
        .tot-price-btn{
          width 1.2rem;
          height 100%;
          line-height .49rem;
          text-align center;
          background #d74a45;
          color #fff;
          font-size .15rem;
          i{
            font-size .12rem;
            font-style normal;
          }
        }
        .tot-price-num{
          margin-right .12rem;
          height 100%;
          line-height .49rem;
          text-align center;
          font-size .16rem;
          font-weight bold;
          color #333;
          i{
            font-style normal;
            font-weight normal;
            color #d74a45;
          }
        }
        .manage-shops{
          width .75rem;
          height .3rem;
          line-height .3rem;
          text-align center;
          font-size .14rem;
          color #fff;
          border-radius 2px;
          margin-right .1rem;
          position relative;
          top 50%;
          transform translateY(-50%);
        }
        .manage-shops:first-child{
          background #ff8800;
        }
        .manage-shops:last-child{
          background #999;
        }
      }
    }
  }
</style>
