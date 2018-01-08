<template>
  <div class="spec-invoice">
    <div class="tit">增票资质</div>
    <section><div class="sp1">单位名称</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">纳税人识别号</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">注册地址</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">注册电话</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">开户银行</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">银行账号</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">发票内容</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">收票人姓名</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">收票人手机</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">所在地区</div><div class="sp2"><input type="text"></div></section>
    <section><div class="sp1">详细地址</div><div class="sp2"><input type="text"></div></section>
    <section class="confimBtn">保存</section>
  </div>
</template>
<script>
  document.title="增票资质";
  export default {
  
  }
</script>
<style lang="stylus" scoped>
  .spec-invoice{
    overflow hidden;
    .tit{
      height .45rem;
      line-height .45rem;
      text-align center;
      background #fff;
      font-size .16rem;
      color #333;
      position relative;
    }
    .tit:after{
      content: "";
      position absolute;
      left 0;
      bottom 0;
      width 100%;
      height 1px;
      background #e5e5e5;
      transform scaleY(0.5);
    }
    section{
      height .45rem;
      line-height .45rem;
      overflow hidden;
      padding 0 .1rem;
      background #fff;
      div{
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
        height .3rem;
        line-height .3rem;
        margin-top .075rem;
        width 2.65rem;
        position relative;
        input{
          width 2.65rem;
          height .3rem;
          background #f7f7fa;
          border-radius 2px;
          padding-left .1rem;
          box-sizing border-box;
        }
        input:focus{
          outline none;
        }
      }
      .sp2:after{
        content: "";
        position absolute;
        left 0;
        top 0;
        width 200%;
        height 200%;
        border  1px solid #ccc;
        box-sizing border-box;
        transform scale(0.5);
        transform-origin 0 0;
        pointer-events: none;
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
</style>
