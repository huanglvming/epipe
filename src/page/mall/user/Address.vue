<template>
  <div class="wrapper">
    <div class="setting-wrapper" v-if="!showSelection">
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
        <div class="setting-content area" @click="handleSelect">{{area}}</div>
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
    <div class="select-address" v-else>
      <area-selector @selectArea="handleSelection"></area-selector>
    </div>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  const AreaSelector = () => import("../../../components/mall/AreaSelector.vue");
  export default {
    name: "MallAddress",
    components:{
      FooterTab,
      AreaSelector
    },
    data(){
      return{
        area: "",
        showSelection: false,
      }
    },
    created(){
      document.title = "账号设置";
    },
    methods:{
      /*显示区域选择*/
      handleSelect(){
        this.showSelection = true;
      },
      /*监听回调函数*/
      handleSelection(str){
        console.log(str);
        this.area = str;
        this.showSelection = false;
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
    justify-content flex-start;
    align-items center;
    padding 0 0.1rem;
    height: 0.45rem;
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
  .setting-item::after{
    content: "";
    position absolute;
    left 0;
    bottom 0;
    width 100%;
    height: 1px;
    background #e9e9e9;
    transform scaleY(0.5);
    transform-origin center;
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
    color: #999;
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
  .icon-jinru{
    font-size 0.12rem;
    color #ccc;
  }
</style>
