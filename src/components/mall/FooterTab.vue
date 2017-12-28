<template>
  <footer class="footer-tab">
    <div class="footer-tab-item" :class="{'tab-active': category===0}">
      <div class="icon-container">
        <i class="iconfont icon-shouyeicon"></i>
      </div>
      <p class="tab-title">首页</p>
    </div>
    <div class="footer-tab-item" :class="{'tab-active': category===1}">
      <div class="icon-container">
        <i class="iconfont icon-fenleiicon"></i>
      </div>
      <p class="tab-title">分类</p>
    </div>
    <div class="footer-tab-item" :class="{'tab-active': category===2}">
      <div class="icon-container">
        <i class="iconfont icon-gouwucheicon"></i>
      </div>
      <p class="tab-title">购物车</p>
    </div>
    <div class="footer-tab-item" :class="{'tab-active': category===3}">
      <div class="icon-container">
        <i class="iconfont icon-gerenzhongxinicon"></i>
      </div>
      <p class="tab-title">个人中心</p>
    </div>
  </footer>
</template>

<script>
  export default{
    name: 'FooterTab',
    props:["category"],
  }
</script>

<style lang="stylus">
  .footer-tab{
    display flex;
    z-index 99;
    position fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background: white;
    border-top: 1px solid #e5e5e5;
  }
  .footer-tab-item{
    flex: 1;
    padding: 8px 0;
    text-align center;
  }
  .iconfont{
    font-size: 18px;
    color: #999;
  }
  .tab-title{
    font-size: 11px;
    color: #999;
  }
  .tab-active{
    .iconfont{
      color: #FF8800;
    }
    .tab-title{
      color: #FF8800;
    }
  }
</style>
