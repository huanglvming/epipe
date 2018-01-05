<template>
  <div class="address-list-wrapper">
    <div class="address-list">
      <div class="list-item" v-for="i in 3">
        <div class="consignee list-line">
          <span class="name">黄律铭</span>
          <span class="tel">185******555</span>
        </div>
        <div class="address list-line">广东省深圳市南山区白石洲下白石</div>
        <div class="operation">
          <div class="left" @click="select">
            <i class="iconfont" :class="selected ? 'icon-xuanzhong' : 'icon-weixuan'"></i>
            <span>设为默认地址</span>
          </div>
          <div class="right">
            <router-link to="malladdress" tag="span" class="edit">编辑</router-link>
            <span class="delete">删除</span>
          </div>
        </div>
      </div>
    </div>
    <router-link to="malladdress" tag="div" class="add-address">
      <div class="item-title">新增收货地址</div>
      <i class="iconfont icon-jia"></i>
    </router-link>
    <footer-tab :category="3"></footer-tab>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  export default {
    name: "AddressList",
    data(){
      return{
        selected: false,
      }
    },
    components:{
      FooterTab
    },
    created(){
      document.title = "账号设置";
    },
    methods:{
      select(){
        this.selected = !this.selected;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .address-list-wrapper{
    background white;
  }
  .item-title{
    color: #999;
  }
  .add-address{
    display flex;
    justify-content space-between;
    align-items center;
    height: 0.45rem;
    padding 0 0.1rem;
  }
  .list-item{
    position relative;
    box-sizing border-box;
    height: 0.8rem;
    padding: 0.15rem 0.1rem 0.1rem 0.1rem;
  }
  .list-item::after{
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
  .list-line{
    font-size 0.14rem;
    line-height 0.18rem;
    color #333;
    white-space nowrap;
    overflow hidden;
    text-overflow ellipsis;
  }
  .operation{
    display flex;
    justify-content space-between;
    align-items center;
    margin-top 0.06rem;
    line-height 1;
  }
  .left{
    font-size 0;
    .iconfont{
      font-size 0.12rem;
      margin-right 0.05rem;
    }
    span{
      font-size 0.12rem;
      color #999;
    }
  }
  .right{
    font-size 0;
    span{
      font-size 0.12rem;
    }
    .edit{
      color: #ff8800;
      margin-right 0.2rem;
    }
    .delete{
      color: #333;
    }
  }
</style>
