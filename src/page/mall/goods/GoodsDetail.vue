<template>
  <div class="goods-con">
    <div class="detail-tab">
      <ul>
        <li><span>商品</span></li>
        <li><span>详情</span></li>
        <li><span>评价</span></li>
      </ul>
    </div>
    <div class="tab-con">
      <div class="goods-banner"></div>
      <div class="goods-des">
        <p>Google 的免费翻译服务可提供简体中文和另外多种语言之间的互译功能,可让您即时翻译字。</p>
        <div><span>￥</span><span>8888</span></div>
      </div>
    </div>
    <div class="add-buy">
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
<style lang="stylus" scoped>
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
      li:first-child{
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
  .tab-con{
    overflow hidden;
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
    }
  }
</style>
