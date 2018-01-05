<template>
  <div class="password-wrapper">
    <div class="setting-item">
      <div class="setting-title">旧密码</div>
      <input type="text">
    </div>
    <div class="setting-item">
      <div class="setting-title">新密码</div>
      <input type="text">
    </div>
    <div class="setting-item">
      <div class="setting-title">确认新密码</div>
      <input type="text">
    </div>
    <div class="btn-confirm">确认</div>
    <footer-tab :category="3"></footer-tab>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  export default {
    name: "MallPassword",
    components:{
      FooterTab
    },
    created(){
      document.title = "账号设置";
    },
  }
</script>
<style lang="stylus" scoped>
  .password-wrapper{
    padding 0.2rem 0.1rem 0.3rem 0.1rem;
    background white;
  }
  .setting-item{
    display flex;
    justify-content space-between;
    align-items center;
    height: 0.4rem;
    margin-bottom 0.15rem;
  }
  .setting-title{
    font-size 0.14rem;
    color #666;
  }
  input{
    width: 2.5rem;
    height: inherit;
    padding 0 0.1rem;
    border-radius: 2px;
    background-color:transparent;
    border: 1px solid #e5e5e5;
    -webkit-appearance: none;
  }
  .btn-confirm{
    width: 3.55rem;
    height: 0.45rem;
    margin 0 auto;
    margin-top 0.4rem;
    background #d95757;
    border-radius 4px;
    line-height 0.45rem;
    text-align center;
    color white;
    font-size 0.15rem;
  }
</style>
