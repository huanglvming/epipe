<template>
  <div class="receiving-adress">
    <div class="adress" v-for="(obj,i) in addressList" :key="i">
      <div><i class="iconfont icon-xuanzhong1" :class="obj.isDefault==1 ? 'red' : 'gray'"></i></div>
      <div>
        <p><span>{{obj.trueName}}</span><span>{{obj.mobPhone}}</span></p>
        <p>{{obj.areaInfo}}{{obj.address}}</p>
      </div>
      <div><i class="iconfont icon-bianji"></i></div>
    </div>
    <div class="adress adress-add">
      <div class="add-address">新增收货地址</div>
      <div><i class="iconfont icon-jia"></i></div>
    </div>
  </div>
</template>
<script>
  document.title="收货地址";
  export default {
    data:function () {
      return{
        addressList:''
      }
    },
    methods:{
      getAddressList(){
        let addressList=JSON.parse(localStorage.getItem("addressList"));
        console.log(addressList);
        this.addressList=addressList;
      }
    },
    created(){
      this.getAddressList();
    }
  }
</script>
<style lang="stylus" scoped>
  .adress{
    height .65rem;
    padding 0 .1rem;
    background #fff;
    border-bottom 1px solid #e5e5e5;
    div{
      float left;
      position relative;
      top 50%;
      transform translateY(-50%);
      i{
        font-size .2rem;
      }
      p{
        font-size .12rem;
        line-height .18rem;
        color #333;
        span{
          margin-right .1rem;
        }
      }
    }
    div:first-child{
      margin-right .15rem;
      .red{
        color #d74a45;
      }
      .gray{
        color #ccc;
      }
    }
    div:last-child{
      float right;
      i{
        color #ccc;
      }
    }
  }
  .adress-add{
    height .45rem;
    line-height .45rem;
    .add-address{
      font-size .12rem;
      color #ccc;
    }
  }
</style>
