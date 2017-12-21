<template>
  <div class="account-login">
    <input type="text" class="inputpart" id="phone" placeholder="请输入手机号">
    <input type="text" class="inputpart" id="password" placeholder="请输入密码">
    <div>请输入正确的手机号</div>
    <input type="button" value="确认登录" id="sub">
    <div>
      <span>忘记密码</span>
      <span>|</span>
      <span>验证登录</span>
    </div>
  </div>
</template>
<script>
  export default{
    name: "AccountLogin"
  }
</script>
<style lang="stylus" scoped>
  .account-login{
    padding 0.7rem .55rem 0 .55rem;
  }
  .inputpart{
    height:.98rem;
    border:none;
    border-bottom :2px solid #ccc;
    font-size .32rem;
    color #999;
  }
</style>
