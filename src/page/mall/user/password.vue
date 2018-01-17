<template>
  <div class="password-wrapper">
    <div class="setting-item">
      <div class="setting-title">旧密码</div>
      <input type="text" v-model="oldPassword">
    </div>
    <div class="setting-item">
      <div class="setting-title">新密码</div>
      <input type="password" v-model="newPassword">
    </div>
    <div class="setting-item">
      <div class="setting-title">确认新密码</div>
      <input type="password" v-model="confirmPassword">
    </div>
    <div class="btn" :class="{'btn-confirm': confirmFlag}" @click="handleConfirm">确认</div>
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
    data(){
      return{
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        mobile: "",
      }
    },
    created(){
      document.title = "账号设置";
      this.getData();
    },
    computed:{
      confirmFlag(){
        if(this.oldPassword && this.newPassword && this.confirmPassword){
          return true;
        }else{
          return false;
        }
      }
    },
    methods:{
      /*获取用户信息*/
      getData(){
        this.axios.post(this.baseURL.mall + '/m/my/queryPersonalMsg' + this.Service.queryString({
          token: this.mallToken.getToken(),
        })).then(res =>{
          console.log("个人信息",res);
          if(res.data.h.code === 200){
            this.mobile = res.data.b.phone;
          }
          if(res.data.h.code === 50){
            this.$router.push("/accountlogin");
          }
        })
      },
      /*修改密码*/
      handleConfirm(){
        if(this.confirmFlag){
          if(this.newPassword === this.confirmPassword){
            this.axios.post(this.baseURL.mall + '/m/my/modifyPass' + this.Service.queryString({
              token: this.mallToken.getToken(),
              mobile: this.mobile,
              password: this.oldPassword,
              newpassword: this.newPassword,
            })).then(res =>{
              console.log("修改密码",res);
              if(res.data.h.code === 200){
                this.logout();
              }else{
                this.$toast(res.data.h.msg);
              }
            })
          }else{
           this.$toast("新密码前后不一致");
          }
        }else{
          return;
        }
      },
      /*退出登录*/
      logout(){
        this.axios.post(this.baseURL.mall + '/m/my/loginOut' + this.Service.queryString({
          token: this.mallToken.getToken(),
        })).then(res =>{
          console.log("退出登录",res);
          if(res.data.h.code === 200){
            this.$router.push("/accountlogin");
          }
        })
      }
    }
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
  .btn{
    width: 3.55rem;
    height: 0.45rem;
    margin 0 auto;
    margin-top 0.4rem;
    background #dedede;
    border-radius 4px;
    line-height 0.45rem;
    text-align center;
    color white;
    font-size 0.15rem;
  }
  .btn-confirm{
    background #d95757;
  }
</style>
