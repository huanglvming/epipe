<template>
  <div class="setting-wrapper">
    <div class="setting-item user-info">
      <div class="user-content">
        <img src="#" alt="" width="40px" height="40px">
        <span class="name">张小惠（18655555555）</span>
      </div>
      <i class="iconfont icon-jinru"></i>
    </div>
    <router-link to="malladdress" tag="div" class="setting-item">
      <div class="setting-title">收货地址管理</div>
      <i class="iconfont icon-jinru"></i>
    </router-link>
    <router-link to="mallpassword" tag="div" class="setting-item">
      <div class="setting-title">修改密码</div>
      <i class="iconfont icon-jinru"></i>
    </router-link>
    <footer-tab :category="3"></footer-tab>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  export default {
    name: "MallSetting",
    components:{
      FooterTab
    },
    created(){
      document.title = "账号设置";
    },
  }
</script>
<style lang="stylus" scoped="true">
  .setting-wrapper{
    background: white;
  }
  .setting-item{
    display flex;
    justify-content space-between;
    align-items center;
    height: 0.45rem;
    padding: 0 0.1rem;
    font-size 0.14rem;
    color: #666;
  }
  .user-content img{
    width 0.4rem;
    height 0.4rem;
    margin-right 0.06rem;
    border-radius 50%;
    border none;
  }
  .setting-item:not(:last-child){
    border-bottom 1px solid #E9E9E9;
  }
  .user-info{
    height: 0.65rem;
  }
</style>
