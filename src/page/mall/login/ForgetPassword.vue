<template>
  <div class="account-login">
    <div class="phone-div">
      <input type="text" class="inputpart" id="phone" placeholder="请输入手机号">
      <div class="verifi-code">获取验证码</div>
    </div>
    <input type="text" class="inputpart" id="password" placeholder="请输入收到的验证码">
    <input type="text" class="inputpart" id="password" placeholder="请输入新的登录密码">
    <input type="text" class="inputpart" id="password" placeholder="请再次输入新的登录密码">
    <div class="warn-tip">请输入正确的手机号</div>
    <input type="button" value="确认修改并登录" id="sub">
  </div>
</template>
<script>
  export default{
    name: "ForgetPassword"
  }
</script>
<style lang="stylus" scoped>
  .phone-div{
    width 100%;
    position relative;
  }
  .verifi-code{
    position absolute;
    right 0;
    bottom .05rem;
    height .29rem;
    line-height .29rem;
    text-align center;
    font-size .13rem;
    color #333;
    padding 0 .06rem;
    border-radius .04rem;
    border .01rem solid #999;
  }
  .account-login {
    width 100%;
    height: 100%;
    background: #fff;
    padding: .35rem .275rem 0 .275rem;
    box-sizing: border-box;
    position: absolute
  }
  .inputpart {
    height: .49rem;
    border: none;
    border-bottom: .01rem solid #ccc;
    font-size: .16rem;
    width: 100%;
    color: #999;
  }
  .inputpart:focus{
    outline none;
    border-bottom .01rem solid #ff8800;
  }
  .warn-tip {
    font-size .13rem;
    color #d74a45;
    margin-top .1rem;
  }
  #sub{
    width 100%;
    height .48rem;
    background #ff8800;
    font-size .17rem;
    color #fff;
    border-radius .04rem;
    margin-top .5rem;
  }
</style>
