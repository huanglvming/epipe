<template>
  <div class="confirm-order">
    <div class="receiving-info">
       <div>
         <p class="p1">
           <span>黄先生</span>
           <span>138****8888</span>
         </p>
         <p class="p2">广东省深圳市南山区华翰科技园D座402A</p>
       </div>
       <div>
         <i class="iconfont icon-jinru"></i>
       </div>
     </div>
    <div class="line"></div>
    <div class="order-list">
      <div class="shop-name">优管自营</div>
      <div class="goods-info">
        <div class="goods-pho">
          <img src="../../../assets/tou.png" alt="">
        </div>
        <div class="goods-coninfo">
          <div class="info">
            <p class="p1">苹果 iPhone X 64G 银色 公开版4G手机 公开版4G手机</p>
            <p class="p2">银色，公开版，64G</p>
          </div>
          <div class="price-num">
            <div class="price">
              <span>￥</span><span>8888</span>
            </div>
            <div class="num">
              <span>x</span><span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-info">
        <div class="goods-pho">
          <img src="../../../assets/tou.png" alt="">
        </div>
        <div class="goods-coninfo">
          <div class="info">
            <p class="p1">苹果 iPhone X 64G 银色 公开版4G手机 公开版4G手机</p>
            <p class="p2">银色，公开版，64G</p>
          </div>
          <div class="price-num">
            <div class="price">
              <span>￥</span><span>8888</span>
            </div>
            <div class="num">
              <span>x</span><span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="shop-name">凯氏集团</div>
      <div class="goods-info">
        <div class="goods-pho">
          <img src="../../../assets/tou.png" alt="">
        </div>
        <div class="goods-coninfo">
          <div class="info">
            <p class="p1">苹果 iPhone X 64G 银色 公开版4G手机 公开版4G手机</p>
            <p class="p2">银色，公开版，64G</p>
          </div>
          <div class="price-num">
            <div class="price">
              <span>￥</span><span>8888</span>
            </div>
            <div class="num">
              <span>x</span><span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="invoice-info">
      <div>配送服务</div>
      <div>快递运输</div>
    </div>
    <div class="invoice-info">
      <div>发票信息</div>
      <div>不开发票 <i class="iconfont icon-jinru"></i></div>
    </div>
    <div class="total-price">
      <div><span>商品金额</span><span>￥8888.00</span></div>
      <div><span>运费</span><span>￥0.00</span></div>
      <div><span></span><span><i>总价：</i>￥8888.00</span></div>
    </div>
    <div class="wx-pay"><div>微信支付</div></div>
  </div>
</template>
<script>
  document.title="确认订单";
  export default {
  
  }
</script>
<style lang="stylus" scoped>
  .confirm-order{
    overflow hidden;
    .receiving-info{
      height .65rem;
      padding .15rem .1rem;
      background #fff;
      box-sizing border-box;
      div{
        height 100%;
      }
      div:first-child{
        float left;
        p{
          font-size .15rem;
          color #333;
          line-height 1.27;
        }
        .p1{
          span{
            font-weight bold;
          }
        }
        .p2{
        }
      }
      div:last-child{
        float right;
        i{
          color #ccc;
          font-size .12rem;
          line-height .35rem;
        }
      }
    }
    .line{
      width 100%;
      height .05rem;
      background url("../../../assets/recive-line.png") repeat-x;
      background-size auto 100%;
      background-color #fff;
    }
    .order-list{
      .shop-name{
        height .45rem;
        line-height .45rem;
        padding-left .1rem;
        font-size .14rem;
        color: #333;
        border-bottom 1px solid #e5e5e5;
        font-weight bold;
        margin-top .1rem;
        background #fff;
      }
      .goods-info{
        padding .15rem .1rem;
        overflow hidden;
        border-bottom 1px solid #e5e5e5;
        background #fff;
        .goods-pho{
          width .7rem;
          height .7rem;
          float left;
          overflow hidden;
          margin-right .2rem;
          img{
            width 100%;
            height 100%;
          }
        }
        .goods-coninfo{
          margin-left .9rem;
          .info{
            p{
              font-size .12rem;
            }
            .p1{
              color #333;
              line-height .2rem;
              text-align justify;
            }
            .p2{
              color #999;
              margin-top .06rem;
            }
          }
          .price-num{
            overflow hidden;
            margin-top .2rem;
            .price{
              float left;
              color #d74a45;
              span:first-child{
                font-size .12rem;
              }
              span:last-child{
                font-size .16rem;
              }
            }
            .num{
              float right;
              color #999;
              margin-right .1rem;
              span:first-child{
                font-size .14rem;
              }
              span:last-child{
                font-size .15rem;
              }
            }
          }
        }
      }
      .goods-info:last-child{
        border-bottom none;
      }
    }
    .invoice-info{
      margin-top .1rem;
      background #fff;
      overflow hidden;
      border-bottom 1px solid #e5e5e5;
      div{
        height .45rem;
        line-height .45rem;
        padding 0 .1rem;
        i{
          font-size .12rem;
          color #ccc;
        }
      }
      div:first-child{
        float left;
        font-size .16rem;
        color #333;
      }
      div:last-child{
        float right;
        font-size .12rem;
        color #333;
      }
    }
    .invoice-info:last-child{
      margin-top 0;
      border none;
    }
    .total-price{
      margin-top .1rem;
      background #fff;
      padding 0 .1rem;
      overflow hidden;
      div{
        margin-top .15rem;
        overflow hidden;
        span:first-child{
          float left;
          font-size .16rem;
          color #333;
        }
        span:last-child{
          float right;
          font-size .16rem;
          color #d74a45;
          font-weight bold;
        }
        i{
          font-style normal;
          color #333;
          font-weight bold;
        }
      }
    }
    .wx-pay{
      padding .25rem .1rem;
      background #fff;
      div{
        width 100%;
        height .45rem;
        line-height .45rem;
        text-align center;
        color #fff;
        font-size .16rem;
        background #54b736;
        border-radius 4px;
      }
    }
  }
</style>
