<template>
  <div class="search-wrapper">
    <div class="search-wrapper">
      <div class="has-search">
        <div class="selections">
          <div class="selection-item" :class="{orderColor:orderState==1}" @click="orderBy(1)">综合排序</div>
          <div class="selection-item" :class="{orderColor:orderState==2}" @click="orderBy(2)">销量优先</div>
          <div class="selection-item" :class="{orderColor:orderState==3}" @click="orderBy(3)">价格优先</div>
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
                  <i class="iconfont icon-xiaogouwucheicon" @click.prevent="addToCart(index)"></i>
                  <span class="btn-buy" @click.prevent="buyNow(index)">立即购买</span>
                </div>
              </div>
            </div>
          </router-link>
          <infinite-loading spinner="bubbles"   @infinite="infiniteHandler" ref="infiniteLoading">
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
        orderState:1,
        pageNo:1,
        sortField:'',
        sortOrder:'',
        state:''
      }
    },
    components:{
      FooterTab,
      InfiniteLoading
    },
    methods:{
      infiniteHandler($state){
        console.log($state);
        this.state=$state;
        setTimeout(() =>{
          let vm = this;
          vm.axios.post(vm.baseURL.mall + "/m/search/goodsClassSearch"+vm.Service.queryString({
            gcIds:vm.$route.query.gcId,
            pageSize:10,
            pageNo:this.pageNo,
            sortField:this.sortField,
            sortOrder:this.sortOrder
          })).then(res=> {
            console.log(res);
            if(res.data.h.code==200){
              if (res.data.b.goods.length < 1) {
                $state.complete();
              } else {
                vm.imgPrefix=res.data.b.imgPrefix;
                vm.resultList = vm.resultList.concat(res.data.b.goods);
                this.pageNo++;
                setTimeout(()=>{
                  $state.loaded();
                },1000);
              }
            }else{
              $state.complete();
            }
          })
        },1000);
      },
      orderBy(index){
        this.orderState=index;
        this.resultList=[];
        this.pageNo=1;
        switch (index){
          case 1:
            this.sortField='';
            this.sortOrder='';
          break;
          case 2:
            this.sortField='salenum';
            this.sortOrder='desc';
          break;
          case 3:
            this.sortField='goodsStorePrice';
            this.sortOrder='asc';
          break;
        };
        this.infiniteHandler(this.state);
      },
      addToCart(index){
        console.log(index);
        this.axios.post(this.baseURL.mall + "/m/cart/addCartItems"+this.Service.queryString({
          token:this.mallToken.getToken(),
          goodsId:this.resultList[index].goodsId,
          count:1,
          specId:this.resultList[index].specId
        })).then(res=>{
          console.log(res);
          if(res.data.h.code==200){
            this.$toast(res.data.b.msg);
          }else  if(res.data.h.code === 50 || res.data.h.code === 30){
            this.$router.push("/accountlogin");
          }else{
            this.$toast(res.data.h.msg);
          }
        })
      },
      buyNow(index){
        console.log(index);
        this.axios.post(this.baseURL.mall + "/m/cart/buy_now"+this.Service.queryString({
          token:this.mallToken.getToken(),
          goodsId:this.resultList[index].goodsId,
          count:1,
          specId:this.resultList[index].specId
        })).then(res=>{
          console.log(res);
          if(res.data.h.code==200){
            localStorage.setItem("settleOrder",JSON.stringify(res.data.b));
            if(localStorage.getItem("settleOrder")){
              this.$router.push({path:'/ConfirmOrder'});
            }
          }else  if(res.data.h.code === 50 || res.data.h.code === 30){
            this.$router.push("/accountlogin");
          }else{
            this.$toast(res.data.h.msg);
          }
        })
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
    margin-top  40px;
    padding-bottom 50px;
  }
  .no-result{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #999;
  }
</style>
