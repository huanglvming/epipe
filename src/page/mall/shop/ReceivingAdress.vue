<template>
  <div class="receiving-adress">
    <div class="adress">
      <div><i class="iconfont icon-xuanzhong1 red"></i></div>
      <div>
        <p><span>黄先生</span><span>138****8888</span></p>
        <p>广东省深圳市南山区华瀚科技D座402A</p>
      </div>
      <div><i class="iconfont icon-bianji"></i></div>
    </div>
    <div class="adress">
      <div><i class="iconfont icon-weixuan gray"></i></div>
      <div>
        <p><span>黄先生</span><span>138****8888</span></p>
        <p>广东省深圳市南山区华瀚科技D座402A</p>
      </div>
      <div><i class="iconfont icon-bianji"></i></div>
    </div>
    <div class="adress adress-add">
      <div class="add-address">新增收货地址</div>
      <div><i class="iconfont icon-jia"></i></div>
    </div>
  </div>
</template>
<script>
  document.title="收货地址";
  export default {
  
  }
</script>
<style lang="stylus" scoped>
  .adress{
    height .65rem;
    padding 0 .1rem;
    background #fff;
    border-bottom 1px solid #e5e5e5;
    div{
      float left;
      position relative;
      top 50%;
      transform translateY(-50%);
      i{
        font-size .2rem;
      }
      p{
        font-size .12rem;
        line-height .18rem;
        color #333;
      }
    }
    div:first-child{
      margin-right .15rem;
      .red{
        color #d74a45;
      }
      .gray{
        color #ccc;
      }
    }
    div:last-child{
      float right;
      i{
        color #ccc;
      }
    }
  }
  .adress-add{
    height .45rem;
    line-height .45rem;
    .add-address{
      font-size .12rem;
      color #ccc;
    }
  }
</style>
