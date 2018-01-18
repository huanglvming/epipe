<template>
  <div class="search-wrapper">
    <div class="search-wrapper">
      <div class="has-search">
        <div class="selections">
          <div class="selection-item" :class="{orderColor:orderState==1}" @click="orderBy(' ',1,' ')">综合排序</div>
          <div class="selection-item" :class="{orderColor:orderState==2}" @click="orderBy('salenum',2,'desc')">销量优先</div>
          <div class="selection-item" :class="{orderColor:orderState==3}" @click="orderBy('goodsStorePrice',3,'asc')">价格优先</div>
        </div>
        <div class="search-result">
          <router-link :to="{path:'/goodsdetail',query:{goodsId: item.goodsId}}" class="result-item" v-for="(item,index) in resultList" :key="index">
            <div class="goods-picture">
              <img :src="imgPrefix + item.goodsImage" alt="商品">
            </div>
            <div class="goods-details">
              <div class="goods-desc">{{item.goodsName}}</div>
              <div class="goods-opr">
                <div class="price">￥{{item.goodsStorePrice}}</div>
                <div class="buy">
                  <i class="iconfont icon-xiaogouwucheicon"></i>
                  <span class="btn-buy" @click.prevent="buyNow(index)">立即购买</span>
                </div>
              </div>
            </div>
          </router-link>
          <infinite-loading spinner="bubbles" :on-infinite="onInfinite" ref="infiniteLoading">
            <span slot="no-more">
              暂无更多加载
            </span>
            <span slot="no-results">
              暂无结果
            </span>
          </infinite-loading>
        </div>
      </div>
    </div>
    <footer-tab :category="1"></footer-tab>
  </div>
</template>

<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  const InfiniteLoading = () => import("vue-infinite-loading");
  export default{
    name: "Search",
    data(){
      return{
        resultList: [],
        imgPrefix: "",
        orderState:1
      }
    },
    components:{
      FooterTab,
      InfiniteLoading
    },
    methods:{
      onInfinite(sortField,index,sortOrder){
        let vm = this;
        setTimeout(() =>{
          vm.axios.post(vm.baseURL.mall + "/m/search/goodsClassSearch"+vm.Service.queryString({
            gcIds:vm.$route.query.gcId,
            pageNo:vm.resultList.length/10+1,
            pageSize:10,
            sortField:sortField || '',
            sortOrder:sortOrder || ''
          })).then(res=> {
            console.log(res);
            if(res.data.h.code==200){
              vm.imgPrefix=res.data.b.imgPrefix;
              if (res.data.b.goods.length == 0) {
                console.log("加载完了");
                vm.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
              } else {
                vm.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                vm.resultList = vm.resultList.concat(res.data.b.goods);
              }
            }else{
              console.log("加载完了");
              vm.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
          })
        },500);
      },
      orderBy(sortField,index,sortOrder){
        //this.resultList=[];
        this.onInfinite(sortField,index,sortOrder);
        this.orderState=index;
      },
      buyNow(index){
        console.log(index);
      }
    },
    created(){
      document.title="分类";
    },
  }
</script>

<style lang="stylus" scoped="true">
  .search-container{
    z-index 9;
    box-sizing border-box;
    display flex;
    justify-content space-between;
    align-items center;
    position fixed;
    left 0;
    top 0;
    width: 100%;
    height: 45px;
    padding: 0 0.15rem;
    background: white;
    border-bottom 1px solid #e5e5e5;
    .search-bar{
      width: 3.25rem;
      height: 29px;
      margin 0 auto;
      line-height 29px;
      padding 0 0.1rem;
      background: rgba(255,255,255,0.7);
      border-radius 0.145rem;
    }
    .icon-search{
      width: 14px;
      height: 15px;
    }
    .search-input{
      width: 3rem;
      height inherit;
      font-size 0.14rem;
      color: #ccc;
      outline none;
      background transparent;
    }
  }
  .search-bar-vice{
    width: 2.65rem;
    height: 29px;
    white-space nowrap;
    line-height 29px;
    padding 0 0.1rem;
    border-radius 0.145rem;
    background: #f2f2f5;
    .search-input-vice{
      width 2.25rem;
      height inherit;
      font-size 0.14rem;
      color: #ccc;
      outline none;
      background transparent;
    }
  }
  .search-btn{
    width: 0.5rem;
    height: 29px;
    border-radius 4px;
    background: #d74a45;
    color: white;
    line-height 29px;
    text-align center;
  }
  .suggestion-content{
    margin-top 46px;
    padding 0.2rem 0.15rem;
    background: white;
    border-bottom 1px solid #e5e5e5;
  }
  .sub-title{
    font-size: 0.11rem;
    color: #666;
    margin-bottom 0.15rem;
  }
  .hot .sub-title{
    margin-top 0.2rem;
  }
  .suggestions{
    font-size 0;
  }
  .suggestion-item{
    display inline-block;
    height: 0.3rem;
    line-height 0.3rem;
    padding: 0 4px;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
    text-align center;
    font-size 0.12rem;
    color #666;
    border: 1px solid #e5e5e5;
    background #efefef;
    cursor pointer;
  }
  .related-search{
    margin-top: 46px;
    background: white;
    border-bottom: 1px solid #e5e5e5;
  }
  .related-title,.related-item{
    height: 40px;
    margin-left 0.15rem;
    line-height: 40px;
    font-size: 14px;
  }
  .related-title{
    color: #666;
    border-bottom: 1px dotted #e5e5e5;
  }
  .related-item{
    color: #d74745;
  }
  .related-item:not(:last-child){
    border-bottom: 1px dotted #e5e5e5;
  }
  .icon-guanbiicon{
    color: #b3b3b3;
  }
  .has-search{
    background: white;
  }
  .selections{
    display flex;
    justify-content space-between;
    align-items center;
    position fixed;
    left 0;
    top 0;
    z-index 9;
    width: 100%;
    height: 40px;
    line-height 40px;
    text-align center;
    border-bottom 1px solid #e5e5e5;
    background: white;
  }
  .selection-item{
    flex: 1;
  }
  .orderColor{
    color #d74845;
  }
  .result-item{
    display flex;
    justify-content space-between;
    height: 1.2rem;
  }
  .goods-picture{
    width: 1.35rem;
    img{
      display block;
      width: 1.1rem;
      height: 1.1rem;
      margin: 0.05rem auto;
    }
  }
  .goods-details{
    display flex;
    flex-direction column;
    justify-content space-between;
    width: 2.25rem;
    padding-right 0.15rem;
    border-bottom 1px solid #e5e5e5;
  }
  .goods-desc{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top 0.15rem;
    font-size: 14px;
    line-height: 18px;
    color: #333;
  }
  .goods-opr{
    display flex;
    justify-content space-between;
  }
  .price{
    margin-bottom 0.18rem;
    font-size: 0.18rem;
    line-height: 1;
    color: #d74845;
  }
  .buy{
    font-size: 0;
  }
  .icon-xiaogouwucheicon{
    margin-right: 0.2rem;
  }
  .btn-buy{
    display inline-block;
    width: 0.75rem;
    height: 0.3rem;
    margin-bottom 0.1rem;
    line-height 0.3rem;
    font-size: 0.14rem;
    text-align center;
    background: #d74a45;
    border-radius: 4px;
    color: white;
  }
  .search-result{
    overflow scroll;
    -webkit-overflow-scrolling: touch;
    padding-top 40px;
    margin-bottom 45px;
  }
  .no-result{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #999;
  }
</style>
