<template>
  <div class="setting-wrapper">
    <div class="setting-item">
      <div class="setting-title">收货人</div>
      <input class="setting-content" type="text" placeholder="姓名">
    </div>
    <div class="setting-item">
      <div class="setting-title">联系方式</div>
      <input class="setting-content" type="tel" placeholder="手机号码">
    </div>
    <div class="setting-item">
      <div class="setting-title">所在区域</div>
      <div class="setting-content area">广东省深圳市南山区高新园</div>
      <i class="iconfont icon-jinru"></i>
    </div>
    <div class="setting-item setting-address">
      <div class="setting-title">详细地址</div>
      <textarea name="address" id="textarea" placeholder="详细地址需填写镇乡路及楼栋楼层房间号信息" maxlength="50"></textarea>
    </div>
    <div class="btn-wrapper">
      <div class="btn-confirm">确定</div>
    </div>
    <footer-tab :category="3"></footer-tab>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  export default {
    name: "MallAddress",
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
    position relative;
    display flex;
    justify-content flex-start;
    align-items center;
    padding 0 0.1rem;
    height: 0.45rem;
    border-bottom 1px solid #E9E9E9;
    .setting-title{
      width: 4.5em;
      font-size 0.14rem;
      color #999;
    }
    .setting-content{
      height: inherit;
      width: 2.8rem;
      line-height 0.45rem;
      margin-left 0.1rem;
      outline none;
      color: #333;
    }
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
    font-size 0.14rem;
    color: #ccc;
  }
  input,textarea{
    font-size 0.14rem;
    color: #333;
  }
  .icon-jinru{
    position absolute;
    right: 0.1rem;
  }
  .setting-address{
    align-items flex-start;
    height: 0.4rem;
    padding: 0.12rem 0.1rem;
    textarea{
      height: 0.4rem;
      width: 3rem;
      margin-left 0.1rem;
      border none;
      outline none;
    }
  }
  .btn-wrapper{
    padding-top 0.15rem;
    padding-bottom 0.25rem;
  }
  .btn-confirm{
    width: 3.55rem;
    height: 0.45rem;
    margin 0 auto;
    border-radius 4px;
    line-height 0.45rem;
    text-align center;
    background #d95757;
    color: white;
    font-size 0.15rem;
  }
</style>
