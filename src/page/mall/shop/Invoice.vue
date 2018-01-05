<template>
  <div class="invoice">
    <div><span class="sp1">发票类型</span><span class="sp2">普通发票</span></div>
    <div><span class="sp1"><i class="iconfont icon-xuanzhong1"></i>普通发票</span></div>
    <div><span class="sp1"><i class="iconfont icon-weixuan"></i>增值税专用发票</span><span class="sp2"><i class="iconfont icon-jinru"></i></span></div>
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
      height .45rem;
      line-height .45rem;
      border-bottom 1px solid #e5e5e5;
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
        }
      }
    }
  }
</style>
