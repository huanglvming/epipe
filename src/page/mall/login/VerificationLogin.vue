<template>
  <div class="account-login">
    <div class="phone-div">
      <input type="text"@input="handleInput" class="inputpart"  placeholder="请输入手机号" v-model="phone">
      <button class="verifi-code" :class="btnclass" :disabled="btndisabled" @click="sendcode">{{btntxt}}</button>
    </div>
    <input type="text" class="inputpart" placeholder="请输入收到的验证码" v-model="verCode">
    <div class="warn-tip">{{tips}}</div>
    <input type="button" value="确认登录" id="sub" @click="confimSubmit">
    <div class="operate">账号密码登录</div>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        btndisabled:false,
        btntxt:"获取验证码",
        tips:'',
        btnclass:"verifi-code-false",
        formMess:{
          phone:this.phone,
          verCode:this.verCode,
        }
      }
    },
    methods: {
      sendcode() {
        var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
        if (this.phone == '' || this.phone == undefined) {
          this.tips = "请输入手机号码";
        } else if (!reg.test(this.phone)) {
          this.tips = "手机格式不正确";
        } else {
          this.time = 60;
          this.disabled = true;
          this.btnclass = "verifi-code-true";
          this.timer();
          /*axios.post(url).then(
              res=>{
              this.phonedata=res.data;
          })*/
        }
      },
      handleInput(e){
        e.target.value=e.target.value.replace(/[^\d]/g,'');
      },
      timer() {
        if (this.time > 0) {
          this.time--;
          this.btntxt=this.time+"s后重新获取";
          setTimeout(this.timer, 1000);
          this.tips="";
        } else{
          this.time=0;
          this.btntxt="获取验证码";
          this.disabled=false;
          this.btnclass="verifi-code-false";
        }
      },
      confimSubmit(){
        if(this.phone==undefined||this.phone.trim()==''){
          this.tips="手机号不能为空";
          return false;
        }else if(this.verCode==undefined||this.verCode.trim()==''){
          this.tips="验证码不能为空";
          return false;
        }else{
          this.tips="";
        }
      }
    }
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
    padding 0 .06rem;
    border-radius .04rem;
    background none;
  }
  .verifi-code-true{
    border .01rem solid #ccc;
    color #999;
  }
  .verifi-code-false{
    border .01rem solid #999;
    color #333;
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
    font-size .14rem;
    color #6699ff;
    float right;
    margin-top .15rem;
  }
</style>
