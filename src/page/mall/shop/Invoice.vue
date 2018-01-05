<template>
  <div class="invoice">
    <div><span class="sp1">发票类型</span><span class="sp2">普通发票</span></div>
    <div><span class="sp1"><i class="iconfont icon-xuanzhong1"></i>普通发票</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>增值税专用发票</span><span class="sp2"><i class="iconfont icon-jinru"></i></span></div>
    <div class="invoice-header"><span class="sp1">发票抬头</span><span class="sp2">个人</span></div>
    <div><span class="sp1"><i class="iconfont icon-xuanzhong1"></i>个人</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>公司</span><span class="sp2"><input type="text" placeholder="公司全称"></span></div>
    <div><span class="sp1"><i  class="iconfont"></i>纳税人识别号</span><span class="sp2"><input type="text" placeholder="请输入纳税人识别号"></span></div>
    <div class="invoice-header"><span class="sp1">普通商品发票内容</span><span class="sp2">商品明细</span></div>
    <div><span class="sp1"><i class="iconfont icon-xuanzhong1"></i>商品明细</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>文具</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>电脑配件</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>耗材</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>日用品</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>电器数码</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>家具建材</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>日化用品</span></div>
    <div  class="invoice-header"><span class="sp1">增票资质</span><span class="sp2"><i class="iconfont icon-jinru"></i></span></div>
    <section><span class="sp1">单位名称</span><span class="sp2">深圳前海无限科技有限公司</span></section>
    <section><span class="sp1">纳税人识别号</span><span class="sp2">9875 2356 1254 158</span></section>
    <section><span class="sp1">注册地址</span><span class="sp2">深圳南山区</span></section>
    <section><span class="sp1">注册电话</span><span class="sp2">12314564654</span></section>
    <section><span class="sp1">开户银行</span><span class="sp2">平安银行</span></section>
    <section><span class="sp1">银行账号</span><span class="sp2">4461231489744165132</span></section>
    <section><span class="sp1">发票内容</span><span class="sp2">商品明细</span></section>
    <section><span class="sp1">收票人姓名</span><span class="sp2">深圳南山区</span></section>
    <section><span class="sp1">收票人手机</span><span class="sp2">18645214555</span></section>
    <section><span class="sp1">所在地区</span><span class="sp2">深圳南山区</span></section>
    <section><span class="sp1">详细地址</span><span class="sp2">深圳南山区</span></section>
    <section class="confimBtn">确认</section>
  </div>
</template>
<script>
  document.title="发票";
  export default {
  
  }
</script>
<style lang="stylus" scoped>
  .invoice{
    overflow hidden;
    div{
      position relative;
      height .45rem;
      line-height .45rem;
      padding 0 .1rem;
      background #fff;
      overflow hidden;
      .sp1{
        float left;
        font-size .14rem;
        color #333;
        i{
          font-size .18rem;
          margin-right .1rem;
          vertical-align middle;
        }
      }
      .sp2{
        float right;
        font-size .12rem;
        color #666;
        i{
          color #ccc;
          font-size .14rem;
        }
      }
      input{
        width 2.45rem;
        height .25rem;
        background #f3f3f5;
        border-radius 2px;
        font-size .12rem;
        color #333;
        padding-left .1rem;
        box-sizing border-box;
      }
      input:focus{
        outline none;
      }
    }
    .invoice-header{
      margin-top .1rem;
    }
    section{
      height .45rem;
      line-height .45rem;
      overflow hidden;
      padding 0 .1rem;
      background #fff;
      span{
        display inline-block;
        font-size .12rem;
        height 100%;
        float left;
      }
      .sp1{
        width .72rem;
        text-align left;
        color #999;
      }
      .sp2 {
        color #333;
        margin-left .15rem;
      }
    }
    .confimBtn{
      height .5rem;
      line-height .5rem;
      text-align center;
      font-size .16rem;
      color #fff;
      margin-top .75rem;
      background #d74a45;
    }
  }
  .invoice div:after{
    content: "";
    position absolute;
    left 0;
    bottom 0;
    width 100%;
    height 1px;
    background #e5e5e5;
    transform scaleY(0.5);
  }
</style>
