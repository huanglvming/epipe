<template>
  <div class="account-login">
    <input type="text"  @input="handleInput" class="inputpart"  placeholder="请输入手机号" v-model="phone">
    <input type="password" class="inputpart"  placeholder="请输入密码" v-model="password">
    <div class="warn-tip">{{tips}}</div>
    <input type="button" value="确认登录" id="sub" @click="confimSubmit">
    <div class="operate">
      <span><a href="#/ForgetPassword">忘记密码</a></span>
      <span>|</span>
      <span><a href="#/VerificationLogin">验证登录</a></span>
    </div>
  </div>
</template>
<script>
  document.title="登录";
  export default{
    data:function () {
      return{
        tips:'',
        formMess:{
          phone:this.phone,
          password:this.password
        }
      }
    },
    methods:{
      handleInput(e){
        e.target.value=e.target.value.replace(/[^\d]/g,'');
      },
      confimSubmit(){
        var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(this.phone==''||this.phone==undefined){
          this.tips="请输入手机号码";
          return false;
        }else if(this.password==undefined||this.password.trim()==''){
          this.tips="请输入密码";
          return false;
        }else if(!reg.test(this.phone)){
          this.tips="手机格式不正确";
          return false;
        }else{
          this.tips="";
          this.axios.post(this.baseURL.mall+"/m/user/login",
            {
              account: this.phone,
              password: this.password
            }).then(res =>{
            console.log(res);
            let dataMes=res.data.h;
            if(dataMes.code==200){
              window.location.href="";
            }else{
              this.tips=dataMes.msg;
            }
          });
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .account-login {
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
    color: #333;
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
  .operate{
    display inline-block;
    position relative;
    left 50%;
    transform translateX(-50%);
    margin-top .15rem;
    span{
      margin-right .05rem;
      font-size .14rem;
      a{
        color #6699ff;
      }
    }
    span:last-child{
      margin-right 0;
    }
    span:nth-child(2){
      color #999;
    }
  }
</style>
