<template>
  <div class="setting-wrapper">
    <router-link to="malluserinfo" tag="div" class="setting-item user-info">
      <div class="user-content">
        <img :src="userInfo.imgurl" alt="">
        <span class="name">{{userInfo.realName}}（{{userInfo.phone}}）</span>
      </div>
      <i class="iconfont icon-jinru"></i>
    </router-link>
    <router-link to="malladdresslist" tag="div" class="setting-item">
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
    data(){
      return{
        userInfo:{},
      }
    },
    created(){
      document.title = "账号设置";
      this.getData();
    },
    methods:{
      getData(){
        this.axios.post(this.baseURL.mall + '/m/my/queryPersonalMsg' + this.Service.queryString({
          token: this.mallToken
        })).then(res =>{
          console.log("个人信息",res);
          if(res.data.h.code === 200){
            this.userInfo = res.data.b;
          }
          if(res.data.h.code === 50){
            this.$router.push("/accountlogin");
          }
        })
      }
    }
  }
</script>
<style lang="stylus" scoped="true">
  .setting-wrapper{
    background: white;
  }
  .setting-item{
    position relative;
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
    vertical-align middle;
    margin-right 0.06rem;
    border-radius 50%;
    border none;
  }
  .setting-item:not(:last-child)::after{
    content: "";
    position absolute;
    left 0;
    bottom 0;
    width 100%;
    height: 1px;
    border-bottom 1px solid #E9E9E9;
    transform scaleY(0.5);
    transform-origin center;
  }
  .user-info{
    height: 0.65rem;
  }
  .icon-jinru{
    font-size 0.12rem;
    color: #ccc;
  }
</style>
