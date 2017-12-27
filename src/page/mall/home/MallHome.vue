<template>
  <div class="mall-index">
    <div class="goods-wrapper">
      <div class="search-container" :class="{'search-container-active':searchContainerActive}">
        <div class="search-bar" @click="linkSearch">
          <i class="iconfont icon-sousuoicon"></i>
          <input type="text" class="search-input">
        </div>
      </div>
      <div class="banner"></div>
      <div class="floor-container">
        <div class="floor">
          <div class="floor-title"></div>
          <div class="floor-1-view">
            <div class="floor-1-container">
              <div class="item">
                <div class="item-img-container">
                  <div class="item-img"></div>
                </div>
                <div class="item-title">iphonex</div>
                <div class="item-price">￥8588</div>
              </div>
              <div class="item">
                <div class="item-img-container">
                  <div class="item-img"></div>
                </div>
                <div class="item-title">iphonex</div>
                <div class="item-price">￥8588</div>
              </div>
              <div class="item">
                <div class="item-img-container">
                  <div class="item-img"></div>
                </div>
                <div class="item-title">iphonex</div>
                <div class="item-price">￥8588</div>
              </div>
              <div class="item">
                <div class="item-img-container">
                  <div class="item-img"></div>
                </div>
                <div class="item-title">iphonex</div>
                <div class="item-price">￥8588</div>
              </div>
              <div class="item">
                <div class="item-img-container">
                  <div class="item-img"></div>
                </div>
                <div class="item-title">iphonex</div>
                <div class="item-price">￥8588</div>
              </div>
            </div>
          </div>
          <div class="floor-banner"></div>
        </div>
        <div class="floor">
          <div class="floor-title"></div>
          <div class="floor-2-view">
            <div class="item item-sm">
              <div class="item-des">
                <p class="des-title">小米手机</p>
                <p class="des-sub">优惠券</p>
              </div>
              <div class="item-img"></div>
            </div>
            <div class="item item-sm">
              <div class="item-des">
                <p class="des-title">小米手机</p>
                <p class="des-sub">优惠券</p>
              </div>
              <div class="item-img"></div>
            </div>
            <div class="item item-sm">
              <div class="item-des">
                <p class="des-title">小米手机</p>
                <p class="des-sub">优惠券</p>
              </div>
              <div class="item-img"></div>
            </div>
            <div class="item item-sm">
              <div class="item-des">
                <p class="des-title">小米手机</p>
                <p class="des-sub">优惠券</p>
              </div>
              <div class="item-img"></div>
            </div>
            <div class="item item-lg">
              <p class="des-title">小米手机</p>
              <p class="des-sub">优惠券</p>
              <div class="item-img"></div>
            </div>
            <div class="item item-lg">
              <p class="des-title">小米手机</p>
              <p class="des-sub">优惠券</p>
              <div class="item-img"></div>
            </div>
          </div>
          <div class="floor-banner"></div>
        </div>
        <div class="floor">
          <div class="floor-title"></div>
          <div class="floor-3-view">
            <div class="item">
              <p class="item-title">小米手机</p>
              <p class="item-des">优惠券</p>
              <div class="item-img"></div>
            </div>
            <div class="item">
              <p class="item-title">小米手机</p>
              <p class="item-des">优惠券</p>
              <div class="item-img"></div>
            </div>
            <div class="item">
              <p class="item-title">小米手机</p>
              <p class="item-des">优惠券</p>
              <div class="item-img"></div>
            </div>
            <div class="item">
              <p class="item-title">小米手机</p>
              <p class="item-des">优惠券</p>
              <div class="item-img"></div>
            </div>
            <div class="item">
              <p class="item-title">小米手机</p>
              <p class="item-des">优惠券</p>
              <div class="item-img"></div>
            </div>
            <div class="item">
              <p class="item-title">小米手机</p>
              <p class="item-des">优惠券</p>
              <div class="item-img"></div>
            </div>
          </div>
          <div class="floor-banner"></div>
        </div>
        <div class="floor">
          <div class="floor-title"></div>
          <div class="floor-4-view">
            <div class="item">
              <div class="item-content">
                <div class="item-img"></div>
                <div class="item-title">美的智能电饭煲家庭年预约XLM450</div>
                <div class="item-sub">
                  <div class="item-price">￥339</div>
                  <div class="buy">
                    <svg class="icon icon-car" aria-hidden="false">
                      <use xlink:href="#icon-gouwuche-xuanzhongicon"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-menu">
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
                <div class="menu-tab">海尔</div>
              </div>
            </div>
            <div class="item">
              <div class="item-content"></div>
            </div>
            <div class="item">
              <div class="item-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {baseURL} from '../../../js/IPconfig';
  export default{
    name: "MallHome",
    data(){
      return{
        searchContainerActive: false,
        showSearch: false,
      }
    },
    methods:{
      getScrollTop(){
        let vm = this;
        const banner = document.querySelector(".banner");
        if(banner){
          const bannerHeight = banner.scrollHeight;
          setTimeout(() =>{
            window.onscroll = function () {
              if(document.documentElement.scrollTop>bannerHeight){
                vm.searchContainerActive = true;
                return;
              }else{
                vm.searchContainerActive = false;
              }
            }
          },200);
        }
      },
      /*跳转搜索页*/
      linkSearch(){
        this.$router.push({path:'/mallsearch'});
      }
    },
    mounted(){
      this.getScrollTop();
    }
  }
</script>
<style lang="stylus" scoped>
  .mall-index{
    background: #f5f5f8;
  }
  .banner{
    width: 100%;
    height: 1.85rem;
    background: rgba(0,0,0,0.3);
  }
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
      position relative;
      z-index 99;
      width: 3rem;
      height inherit;
      font-size 0.14rem;
      color: #ccc;
      outline none;
      background transparent;
    }
  }
  .search-container-active{
    background: rgba(255,255,255,1);
    border-bottom: 1px solid #e5e5e5;
    .search-bar{
      background: #F2F2F5;
    }
  }
  .floor-container{
    padding 0 0.15rem;
  }
  .floor{
    width 3.45rem;
  }
  .floor-title{
    height: 0.6rem;
  }
  .floor-1-view{
    overflow-x scroll;
    width 3.45rem;
    margin-bottom 0.1rem;
    background: white;
    border-radius: 2px;
    .floor-1-container{
      width 15rem;
    }
    .item{
      float left;
      width 1.2rem;
      padding 0.15rem 0;
      text-align center;
      line-height 1;
    }
    .item-img-container{
      width: 100%;
    }
    .item-img{
      width: 0.9rem;
      height: 0.9rem;
      margin: 0 auto;
      margin-bottom 0.15rem;
      background: red;
    }
    .item-title{
      margin-bottom 0.12rem;
      font-title: 0.12rem;
      color #666;
    }
    .item-price{
      font-size: 0.14rem;
      color: #d74a45;
    }
  }
  .floor-1-view .item:not(:last-child){
    .item-img-container{
      border-right: 1px solid #f5f5f8;
    }
  }
  .floor-1-view::-webkit-scrollbar{
    width 0;
    height 0;
  }
  .floor-banner{
    width 3.45rem;
    height 0.95rem;
    border-radius 0.08rem;
    background: white;
  }
  .floor-2-view{
    display flex;
    justify-content space-between;
    flex-wrap wrap;
    width inherit;
    .item{
      width: 1.675rem;
      margin-bottom 0.1rem;
      background: white;
    }
    .item-img{
      width 0.6rem;
      height 0.6rem;
      margin-right 0.05rem;
      background: red;
    }
    .item-sm{
      display flex;
      justify-content space-between;
      height: 0.805rem;
      padding-top 0.2rem;
    }
    .item-lg{
      height: 1.5rem;
      padding-top 0.15rem;
      padding-bottom 0.1rem;
      text-align center;
      line-height 1;
      .item-img{
        width: 1.05rem;
        height: 1.05rem;
        margin 0 auto;
        margin-top 0.1rem;
      }
    }
    .item-des{
      margin-left 0.12rem;
      line-height 1;
    }
    .des-title{
      margin-bottom 0.1rem;
      font-size 0.14rem;
      font-weight bold;
      color: #333;
    }
    .des-sub{
      font-size 0.12rem;
      color: #999;
    }
  }
  .floor-3-view{
    display flex;
    justify-content space-between;
    flex-wrap wrap;
    .item{
      width: 1.07rem;
      height: 1.55rem;
      padding-top 0.15rem;
      padding-bottom 0.1rem;
      margin-bottom 0.12rem;
      background: white;
      line-height 1;
      text-align center;
    }
    .item-title{
      margin-bottom 0.1rem;
      font-size: 0.14rem;
      font-weight bold;
      color: #333;
    }
    .item-des{
      font-size: 0.12rem;
      color: #99;
    }
    .item-img{
      width: 0.9rem;
      height: 0.9rem;
      margin: 0 auto;
      margin-top: 0.24rem;
      background: red;
    }
  }
  .floor-4-view{
    display: flex;
    justify-content space-between;
    flex-wrap wrap;
    .item{
      width: 1.675rem;
      height: 2.45rem;
      margin-bottom 0.1rem;
    }
    .item-content{
      box-sizing border-box;
      width: inherit;
      height inherit;
      padding: 0.15rem 0.14rem 0.16rem 0.14rem;
      background: white;
    }
    .item-img{
      width: 1.4rem;
      height: 1.4rem;
      margin: 0 auto;
      background: red;
    }
    .item-title{
      margin-top 0.16rem;
      font-size: 0.14rem;
      line-height 0.18rem;
      color: #666;
    }
    .item-sub{
      display flex;
      justify-content space-between;
    }
    .item-price{
      font-size 0.16rem;
      color: #333;
    }
    .item-menu{
      display flex;
      justify-content space-between;
      flex-wrap wrap;
      width: inherit;
      height inherit;
    }
    .menu-tab{
      width: 0.79rem;
      height: 0.53rem;
      margin-bottom 0.105rem;
      font-size 0.12rem;
      color #666;
      text-align center;
      line-height 0.53rem;
      background: white;
      border-radius 0.02rem;
    }
  }
</style>
