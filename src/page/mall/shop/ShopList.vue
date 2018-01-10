<template>
  <div class="shop-cart">
    <div class="hea-ope" @click="listOperate">{{operate}}</div>
    <div class="one-shop" v-for="(obj,index1) in shopList" :key="index1">
      <div class="seller-shop-name">
        <i class="iconfont" :class="obj.checked ? 'icon-xuanzhong1 select-d74a45' : 'icon-weixuan select-ccc' " ></i>{{obj.storeName}}
        <input type="checkbox" name="oneStroe" v-model="obj.checked" @click="chooseShopGoods(index1)"/>
      </div>
      <div class="shop-goods" v-for="(item,index) in obj.list" :key="index">
        <div class="goods-ope">
          <i class="iconfont" :class="item.checked ? 'icon-xuanzhong1 select-d74a45' : 'icon-weixuan select-ccc'" ></i>
          <input type="checkbox" name="one" v-model="item.checked" @click="chooseOne(index1,index)"/>
        </div>
        <div class="goods-pho"><img :src="imgPrefix+item.goodsImages" alt=""></div>
        <div class="goods-class">
          <P class="p1">{{item.goodsName}}</P>
          <P class="p2" v-if="item.specInfo!==''" v-html="item.specInfo"></P>
          <P class="p2" v-if="item.specInfo===''">无具体规格</P>
          <section class="price-num">
            <section class="price"><i>￥</i>{{item.goodsPrice}}</section>
            <section class="num">
              <span @click="reduce(index1,index)"><i class="iconfont icon-jian"></i></span>
              <span><input type="text" :value="item.goodsNum"></span>
              <span @click="add(index1,index)"><i class="iconfont icon-jia1"></i></span>
            </section>
          </section>
        </div>
      </div>
    </div>
    <div class="settlement">
      <div class="sel-all" >
        <div>
          <i class="iconfont" :class="allChecked ? 'icon-xuanzhong1 select-d74a45' : 'icon-weixuan select-ccc' "></i>
          <input type="checkbox" name="all" v-model="allChecked" @click="chooseAllGoods"/>
        </div>
        <div>全选</div>
      </div>
      <div class="tot-price" v-if="showIndex==0">
        <div class="tot-price-btn" @click="settlement">去结算<i>(0件)</i></div>
        <div class="tot-price-num">总计：<i>￥0.00</i></div>
      </div>
      <div class="tot-price" v-if="showIndex==1">
        <div class="manage-shops" @click="delect">删除</div>
        <div class="manage-shops" @click="addToCollection">移入收藏</div>
      </div>
    </div>
    <footer-tab :category="2"></footer-tab>
  </div>
</template>
<script>
  document.title="购物车";
  import FooterTab from "../../../components/mall/FooterTab.vue";
  document.title="购物车";
  export  default{
    components:{
      FooterTab,
    },
    data: function () {
      return {
        allChecked:false,
        operate:'编辑商品',
        showIndex:0,
        shopList:[],    // 购物车列表
        imgPrefix:'',   //图片前缀
        cartIds:[],
        goodsIds:[],
      }
    },
    methods:{
      listOperate(){
        if(this.showIndex===0){
          this.operate='完成';
          this.showIndex=1;
        }else{
          this.operate='编辑商品';
          this.showIndex=0;
        }
      },
      //购买商品加减
      add(i,j){
        this.shopList[i].list[j].goodsNum++;
      },
      reduce(i,j){
        if(this.shopList[i].list[j].goodsNum!==1){
          this.shopList[i].list[j].goodsNum--
        }
      },
      //获取购物车列表信息
      getCartList(){
        this.axios.post(this.baseURL.mall + "/m/cart/myCart"+this.Service.queryString({
          token:this.mallToken
        })).then(res=>{
          console.log('购物车信息',res);
          if(res.data.h.code==200){
            let shopList=res.data.b.cartVoList;
            for(let i=0;i<shopList.length;i++){
              shopList[i].checked=false;
              for(let j=0;j<shopList[i].list.length;j++){
                shopList[i].list[j].checked=false;
              }
            }
            this.shopList=shopList;
            console.log(this.shopList);
            this.imgPrefix=res.data.b.imgPrefix;
          }
        })
      },
      // 全部商品全选
      chooseAllGoods () {
        let flag = true;
        if ( this.allChecked ) {
          flag = false;
        }
        for ( let i = 0, len = this.shopList.length; i < len; i++ ) {
          this.shopList[i].checked = flag;
          let list = this.shopList[i].list;
          for ( let k = 0, len1 = list.length; k < len1; k++ ) {
            list[k].checked = flag;
            if ( this.allChecked ) {
              this.goodsIds.splice(this.goodsIds.indexOf(list[k].goodsId),1);
              this.cartIds.splice(this.cartIds.indexOf(list[k].cartId),1);
            }else{
              if(this.goodsIds.indexOf(list[k].goodsId)==-1){
                this.goodsIds.push(list[k].goodsId);
              }
              if(this.cartIds.indexOf(list[k].cartId)==-1){
                this.cartIds.push(list[k].cartId);
              }
            }
          }
        }
        console.log("goodsIds:",this.goodsIds);
        console.log("cartIds:",this.cartIds);
        
        this.allChecked = !this.allChecked;
      },
  
      // 每个店铺全选
      chooseShopGoods ( index1) {
        let list = this.shopList[index1].list,
          len = list.length;
        if ( this.shopList[index1].checked ) {
          for (let i = 0; i < len; i++ ) {
            list[i].checked = false;
            this.goodsIds.splice(this.goodsIds.indexOf(list[i].goodsId),1);
            this.cartIds.splice(this.cartIds.indexOf(list[i].cartId),1);
          }
          console.log("goodsIds:",this.goodsIds);
          console.log("cartIds:",this.cartIds);
        } else {
          for (let i = 0; i < len; i++ ) {
            list[i].checked = true;
            if(this.goodsIds.indexOf(list[i].goodsId)==-1){
              this.goodsIds.push(list[i].goodsId);
            }
            if(this.cartIds.indexOf(list[i].cartId)==-1){
              this.cartIds.push(list[i].cartId);
            }
          }
          console.log("goodsIds:",this.goodsIds);
          console.log("cartIds:",this.cartIds);
        }
        this.shopList[index1].checked = !this.shopList[index1].checked;
    
        // 判断是否选择所有商品的全选
        this.isChooseAll();
      },
  
      // 单个选择
      chooseOne ( index1, index) {
        let list = this.shopList[index1].list,
          len = list.length;
        if ( list[index].checked ) {
          this.shopList[index1].checked = false;
          this.allChecked = false;
          list[index].checked = !list[index].checked;
          this.goodsIds.splice(this.goodsIds.indexOf(list[index].goodsId),1);
          console.log("goodsIds:",this.goodsIds);
          this.cartIds.splice(this.cartIds.indexOf(list[index].cartId),1);
          console.log("cartIds:",this.cartIds);
        } else {
          list[index].checked = !list[index].checked;
          if(this.goodsIds.indexOf(list[index].goodsId)==-1){
            this.goodsIds.push(list[index].goodsId);
          }
          console.log("goodsIds:",this.goodsIds);
          this.cartIds.push(list[index].cartId);
          console.log("cartIds:",this.cartIds);
          // 判断是否选择当前店铺的全选
          let flag = true;
          for (let i = 0; i < len; i++ ) {
            if ( list[i].checked == false ) {
              flag = false;
              break;
            }
          }
          flag == true ? this.shopList[index1].checked = true : this.shopList[index1].checked = false;
        }
    
        // 判断是否选择所有商品的全选
        this.isChooseAll();
      },
  
      // 判断是否选择所有商品的全选
      isChooseAll () {
        let flag1 = true;
        for ( let i = 0, len = this.shopList.length; i < len; i++ ) {
          if ( this.shopList[i].checked == false ) {
            flag1 = false;
            break;
          }
        }
        flag1 == true ? this.allChecked = true : this.allChecked = false;
      },
      //删除
      delect(){
        this.axios.post(this.baseURL.mall + "/m/cart/deleteCartItems"+this.Service.queryString({
          token:this.mallToken,
          cartIds:this.cartIds.join(',')
        })).then(res=>{
          console.log(res);
          if(res.data.h.code==200){
            this.$toast("删除成功");
            this.getCartList();
          }else{
            this.$toast(res.data.h.msg);
          }
        })
      },
      //移入收藏夹
      addToCollection(){
        this.axios.post(this.baseURL.mall + "/m/favorite/collectGoods"+this.Service.queryString({
          token:this.mallToken,
          goodsIds:this.goodsIds.join(',')
        })).then(res=>{
          console.log(res);
          if(res.data.h.code==200){
            this.$toast("移入收藏夹成功");
          }else{
            this.$toast(res.data.h.msg);
          }
        })
      },
      //结算
      settlement(){
        this.axios.post(this.baseURL.mall + "/m/cart/confirmOrder"+this.Service.queryString({
          token:this.mallToken,
          cartIds:this.cartIds.join(',')
        })).then(res=>{
          console.log(res);
          
        })
      }
    },
    created(){
      this.getCartList();
    }
  }
</script>
<style lang="stylus" scoped>
  .shop-cart{
    overflow hidden;
    margin-top .45rem;
    padding-bottom calc(.6rem + 50px);
    .hea-ope{
      height .45rem;
      line-height .45rem;
      background #fff;
      color #ff8800;
      text-align right;
      padding-right .15rem;
      font-size .14rem;
      position fixed;
      left 0;
      top 0;
      z-index 2;
      width 100%;
      box-sizing border-box;
    }
    .hea-ope:after{
      content: "";
      position absolute;
      left 0;
      bottom 0;
      width 100%;
      height 1px;
      background #e5e5e5;
      transform scaleY(0.5);
    }
    .one-shop{
      margin-top .1rem;
      background #fff;
      .seller-shop-name{
        height .45rem;
        line-height .45rem;
        font-size .16rem;
        color #333;
        border-bottom 1px solid #e5e5e5;
        position relative;
        input{
          position absolute;
          width .24rem;
          height 100%;
          left .1rem;
          top 0;
          z-index 10;
          opacity 0;
        }
        i{
          margin 0 .1rem;
          font-size .24rem;
          vertical-align middle;
        }
      }
      .shop-goods{
        overflow hidden;
        height 1.35rem;
        border-bottom 1px solid #e5e5e5;
        div{
          float left;
          margin-right .1rem;
        }
        .goods-ope{
          margin-left .1rem;
          margin-top .43rem;
          position relative;
          input{
            position absolute;
            width 100%;
            height 100%;
            left 0;
            top 0;
            z-index 10;
            opacity 0;
          }
          i{
            font-size .24rem;
          }
        }
        .goods-pho{
          width .8rem;
          height .8rem;
          margin-top .15rem;
          img{
            display block;
            width 100%;
            height 100%;
          }
        }
        .goods-class{
          margin-right 0;
          padding-right .1rem;
          box-sizing border-box;
          width calc(100% - 1.34rem);
          margin-top .15rem;
          .p1{
            font-size .14rem;
            color #333;
            line-height .2rem;
            height .4rem;
            overflow hidden;
            word-break break-all;
          }
          .p2{
            font-size .14rem;
            color #999;
            margin-top .08rem;
            height .2rem;
            overflow hidden;
            word-break break-all;
          }
          .price-num{
            overflow hidden;
            height .3rem;
            line-height: .3rem;
            margin-top .1rem;
            .price{
              float left;
              color #d74a45;
              font-size .16rem;
              i{
                font-style normal;
                font-size .12rem;
              }
            }
            .num{
              font-size 0;
              float right;
              span{
                display inline-block;
                width .29rem;
                height .29rem;
                border-radius 2px;
                background #f7f7f7;
                text-align center;
                line-height .29rem;
                margin-right .01rem;
                i{
                  color #666;
                }
              }
              span:nth-child(2){
                width .49rem;
              }
              span:last-child{
                margin-right 0;
              }
              input{
                width 100%;
                height .29rem;
                border-radius 2px;
                text-align center;
                background #f7f7f7;
                color #999;
              }
              input:focus{
                outline none;
              }
            }
          }
        }
      }
      .shop-goods:last-child{
        border-bottom none;
      }
    }
    .settlement{
      width 100%;
      height .49rem;
      background #fff;
      border-top 1px solid #e5e5e5;
      position fixed;
      bottom 49px;
      z-index 11;
      .sel-all{
        float left;
        text-align center;
        margin-left .1rem;
        position relative;
        top 50%;
        transform translateY(-50%);
        div:first-child{
          position relative;
          input {
            position absolute;
            width 100%;
            height 100%;
            left 0;
            top 0;
            display inline-block;
            z-index 10;
            opacity 0;
          }
          i{
            font-size .24rem;
            }
        }
        div:last-child{
          font-size .12rem;
          color #999;
        }
      }
      .tot-price{
        float right;
        height 100%;
        div{
          float right;
        }
        .tot-price-btn{
          width 1.2rem;
          height 100%;
          line-height .49rem;
          text-align center;
          background #d74a45;
          color #fff;
          font-size .15rem;
          i{
            font-size .12rem;
            font-style normal;
          }
        }
        .tot-price-num{
          margin-right .12rem;
          height 100%;
          line-height .49rem;
          text-align center;
          font-size .16rem;
          font-weight bold;
          color #333;
          i{
            font-style normal;
            font-weight normal;
            color #d74a45;
          }
        }
        .manage-shops{
          width .75rem;
          height .3rem;
          line-height .3rem;
          text-align center;
          font-size .14rem;
          color #fff;
          border-radius 2px;
          margin-right .1rem;
          position relative;
          top 50%;
          transform translateY(-50%);
        }
        .manage-shops:first-child{
          background #ff8800;
        }
        .manage-shops:last-child{
          background #999;
        }
      }
    }
  }
  .select-ccc{
    color #ccc;
  }
  .select-d74a45{
    color #d74a45;
  }
</style>
