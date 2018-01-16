<template>
  <footer class="footer-tab">
    <router-link to="mallhome" tag="div" class="footer-tab-item" :class="{'tab-active': category===0}">
      <div class="icon-container">
        <i class="iconfont" :class="category===0 ? 'icon-shouye-xuanzhongicon':'icon-shouyeicon'"></i>
      </div>
      <p class="tab-title">首页</p>
    </router-link>
    <router-link to="goodsclassification" tag="div" class="footer-tab-item" :class="{'tab-active': category===1}">
      <div class="icon-container">
        <i class="iconfont" :class="category===1 ? 'icon-fenlei-xuanzhongicon':'icon-fenleiicon'"></i>
      </div>
      <p class="tab-title">分类</p>
    </router-link>
    <router-link to="shoplist" tag="div" class="footer-tab-item" :class="{'tab-active': category===2}">
      <div class="icon-container">
        <i class="iconfont" :class="category===2 ? 'icon-gouwuche-xuanzhongicon':'icon-gouwucheicon'"></i>
      </div>
      <p class="tab-title">购物车</p>
    </router-link>
    <router-link to="malluser" tag="div" class="footer-tab-item" :class="{'tab-active': category===3}">
      <div class="icon-container">
        <i class="iconfont" :class="category===3 ? 'icon-gerenzhongxin-xuanzhongicon':'icon-gerenzhongxinicon'"></i>
      </div>
      <p class="tab-title">个人中心</p>
    </router-link>
  </footer>
</template>

<script>
  export default{
    name: 'FooterTab',
    props:["category"],
  }
</script>

<style lang="stylus" scoped>
  .footer-tab{
    display flex;
    z-index 99;
    position fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background: white;

  }
  .footer-tab::before{
    content: "";
    position absolute;
    left 0;
    top 0;
    width 100%;
    height: 1px;
    background #e5e5e5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .footer-tab-item{
    flex: 1;
    padding: 6px 0;
    text-align center;
  }
  .iconfont{
    font-size: 22px;
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
