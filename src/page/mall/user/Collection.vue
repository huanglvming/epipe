<template>
  <div class="collection-wrapper">
    <div class="status" @click="handleEdit">
      <span v-if="!edit">商品管理</span>
      <span v-else>完成</span>
    </div>
    <div class="collection-list" :class="{'padding-bottom':edit&&len>4}">
      <div class="list-item" v-for="(item,index) in len" :key="index">
        <div class="left">
          <i class="iconfont" :class="checkedList[index] ? 'icon-xuanzhong1' : 'icon-weixuan'" v-if="edit" @click="singleCheck(index)"></i>
          <img src="#" alt="">
        </div>
        <div class="right">
          <div class="desc">Apple MacBook Pro 15.4英寸笔记本 银色Core i7 处理器/16GB</div>
          <div class="sub">
            <div class="price">￥3099</div>
            <div class="buy">
              <i class="iconfont icon-gouwucheicon"></i>
              <button class="buy-now">立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="operate" v-show="edit">
      <div class="select-all" @click="handleSelectAll">
        <i class="iconfont" :class="selectAll ? 'icon-xuanzhong1' : 'icon-weixuan'"></i>
        <p>全选</p>
      </div>
      <button class="btn-delete">删除</button>
    </div>
    <footer-tab :category="3"></footer-tab>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  export default {
    name: "MallCollection",
    data(){
      return{
        edit: false,
        selectAll: false,
        len: 0,
        checkedList: [],
      }
    },
    components:{
      FooterTab
    },
    created(){
      document.title = "商品收藏";
      let vm = this;
      setTimeout(() =>{
        vm.len = 8;
        vm.checkedList = new Array(vm.len);
      },200);
    },
    watch:{
      'checkedList':{
        handler: function(arr){
          for(var i=0; i<arr.length; i++){
            if(!arr[i]){
              this.selectAll = false;
              return;
            }
            if(i === arr.length-1){
              this.selectAll = true;
            }
          }
        },
        deep: true
      }
    },
    methods:{
      handleEdit(){
        this.edit = !this.edit;
      },
      handleSelectAll(){
        this.selectAll = !this.selectAll;
        for(var i=0; i<this.len; i++){
          this.$set(this.checkedList,i,this.selectAll);
        }
      },
      singleCheck(index){
        this.$set(this.checkedList,index,!this.checkedList[index]);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .collection-wrapper{
    background white;
  }
  .status{
    display flex;
    justify-content flex-end;
    align-items center;
    position fixed;
    left 0;
    top 0;
    box-sizing border-box;
    z-index 9;
    width 100%;
    height: 0.45rem;
    padding 0.1rem;
    color: #ff8800;
    font-size 0.14rem;
    border-bottom 1px solid #E9E9E9;
    background white;
  }
  .collection-list{
    padding 45px 0;
  }
  .padding-bottom{
    padding-bottom 90px;
  }
  .list-item{
    display flex;
    justify-content space-between;
    align-items center;
    height: 1.2rem;
    padding-left: 0.1rem;
  }
  .left{
    display flex;
    justify-content space-between;
    align-items center;
    .iconfont{
      margin-right 0.1rem;
      font-size 0.2rem;
    }
    img{
      width 1.1rem;
      height 1.1rem;
      margin-right 0.1rem;
      background red;
    }
  }
  .right{
    display flex;
    flex-direction column;
    justify-content space-between;
    height: 1rem;
    padding: 0.1rem 0;
    padding-right 0.1rem;
    border-bottom 1px solid #E9E9E9;
    .desc{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size 0.14rem;
      line-height 0.18rem;
      color: #333;
    }
    .sub{
      display flex;
      justify-content space-between;
      align-items center;
    }
    .price{
      font-size 0.18rem;
      color: #d74a45;
    }
    .buy{
      font-size 0;
    }
    .icon-gouwucheicon{
      font-size 0.15rem;
      color: #666;
      margin-right 0.18rem;
    }
    .buy-now{
      width: 0.75rem;
      height: 0.3rem;
      text-align center;
      line-height 0.3rem;
      font-size 0.14rem;
      background #d74a45;
      color: white;
      border-radius 2px;
      border: none;
    }
  }
  .operate{
    display flex;
    justify-content space-between;
    align-items center;
    position fixed;
    box-sizing border-box;
    left 0;
    bottom 50px;
    width 100%;
    height 49px;
    padding 0 0.1rem;
    border-top: 1px solid #e5e5e5;
    background white;
    .select-all{
      text-align center;
      .iconfont{
        font-size 0.2rem;
      }
      p{
        font-size: 0.12rem;
        line-height: 1;
        color: #999;
      }
    }
    .btn-delete{
      padding 0;
      width 0.75rem;
      height 0.3rem;
      border: none;
      background #ff8800;
      color: white;
      border-radius 2px;
    }
  }
</style>
