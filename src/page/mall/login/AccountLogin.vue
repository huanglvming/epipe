<template>
  <div class="account-login">
    <input type="text" id="phone">
    <input type="text" id="password">
    <div>请输入正确的手机号</div>
    <input type="button" value="确认登录">
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
    padding :0.7rem 0.55rem 0 0.55rem;
  }
</style>
