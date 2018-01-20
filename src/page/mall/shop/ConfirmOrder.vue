<template>
  <div class="confirm-order">
    <div class="receiving-info">
      <a href="#/ReceivingAdress">
        <div v-for="(obj,i) in addressList" :key="i" v-if="obj.isDefault==1">
          <p class="p1">
            <span>{{obj.trueName}}</span>
            <span>{{obj.mobPhone}}</span>
          </p>
          <p class="p2">{{obj.areaInfo}}{{obj.address}}</p>
        </div>
        <div>
          <i class="iconfont icon-jinru"></i>
        </div>
      </a>
     </div>
    <div class="line"></div>
    <div class="order-list">
      <div class="settleOneStroe" v-for="(obj,i) in cartList" :key="i">
        <div class="shop-name">{{obj.storeName}}</div>
        <div class="goods-info" v-for="(item,j) in obj.list" :key="j">
          <div class="goods-pho">
            <img :src="imgPrefix+item.goodsImages" >
          </div>
          <div class="goods-coninfo">
            <div class="info">
              <p class="p1">{{item.goodsName}}</p>
              <p class="p2" v-html="item.specInfo"></p>
            </div>
            <div class="price-num">
              <div class="price">
                <span>￥</span><span>{{item.goodsPrice}}</span>
              </div>
              <div class="num">
                <span>x</span><span>{{item.goodsNum}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="invoice-info">
      <div>配送服务</div>
      <div>快递运输</div>
    </div>
    <div class="invoice-info">
      <a href="#/Invoice">
        <div>发票信息</div>
        <div>{{invoiceType}}<i class="iconfont icon-jinru"></i></div>
      </a>
    </div>
    <div class="total-price">
      <div><span>商品金额</span><span>￥{{goodsTotalPrice}}.00</span></div>
      <div><span>运费</span><span>￥0.00</span></div>
      <div><span></span><span><i>总价：</i>￥{{goodsTotalPrice}}.00</span></div>
    </div>
    <div class="wx-pay" @click="submitPay"><div>微信支付</div></div>
  </div>
</template>
<script>
  document.title="确认订单";
  export default {
    data:function () {
      return{
        imgPrefix:'',   //图片地址前缀
        cartList:'',    //结算订单列表
        addressList:'', //收件地址
        goodsTotalPrice:'', //结算总额
        invoiceType:'不开发票',
        cartIds:[],
        openInv:0,
        invoiceId:''
        
      }
    },
    methods:{
      getSettlement(){
        let settleOrder=JSON.parse(localStorage.getItem("settleOrder"));
        console.log(settleOrder);
        this.imgPrefix=settleOrder.imgPrefix;
        this.cartList=settleOrder.cartVoList;
        for(let i=0;i<this.cartList.length;i++){
          for(let j=0;j<this.cartList[i].list.length;j++){
            this.cartIds.push(this.cartList[i].list[j].cartId);
          }
        }
        this.goodsTotalPrice=settleOrder.map.goodsTotalPrice;
        this.axios.post(this.baseURL.mall + "/m/my/queryUserAddress"+this.Service.queryString({
          token:this.mallToken.getToken(),
        })).then(res=>{
          console.log(res);
          if(res.data.h.code==200){
            this.addressList=res.data.b;
          }else  if(res.data.h.code === 50 || res.data.h.code === 30){
            this.$router.push("/accountlogin");
          }else{
            this.$toast(res.data.h.msg);
          }
        })
      },
      submitPay(){
        this.axios.post(this.baseURL.mall + "/m/my/getCode"+this.Service.queryString({
          token:this.mallToken.getToken()
        })).then(res=>{
          console.log(res);
          if(res.data.h.code==200){
           window.location.href=res.data.b;
          }
        })
      }
//      submitPay(){
//        this.axios.post(this.baseURL.mall + "/m/my/orderPay"+this.Service.queryString({
//          token:this.mallToken.getToken(),
//          cartIds:this.cartIds.join(','),
//          addressId:this.addressList[0].addressId,
//          openInv:this.openInv,
//          invoiceId:this.invoiceId
//        })).then(res=>{
//          console.log(res);
//          if(res.data.h.code==200){
//            let payInfoList=res.data.b;
//            function onBridgeReady(){
//              WeixinJSBridge.invoke(
//                'getBrandWCPayRequest', {
//                  "appId":payInfoList.appId,     //公众号名称，由商户传入
//                  "timeStamp":payInfoList.timeStamp,         //时间戳，自1970年以来的秒数
//                  "nonceStr":payInfoList.nonceStr, //随机串
//                  "package":payInfoList.package,
//                  "signType":payInfoList.signType,         //微信签名方式：
//                  "paySign":payInfoList.paySign //微信签名
//                },
//                function(res){
//                  if(res.err_msg == "get_brand_wcpay_request:ok" ) {
//
//                  }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
//                }
//              );
//            }
//            if (typeof WeixinJSBridge == "undefined"){
//              if( document.addEventListener ){
//                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//              }else if (document.attachEvent){
//                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
//                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//              }
//            }else{
//              onBridgeReady();
//            }
//          }else{
//            this.$toast(res.data.h.msg);
//          }
//        })
//      }
    },
    created(){
      this.getSettlement();
      if(localStorage.getItem("invoiceListArr")){
        let newInvoiceList=JSON.parse(localStorage.getItem("invoiceListArr"));
        console.log('发票信息',newInvoiceList);
        this.openInv=1;
        this.invoiceId=newInvoiceList.invId;
        if(newInvoiceList.invState==1){
          this.invoiceType='普通发票 个人';
        }else if(newInvoiceList.invState==2 && newInvoiceList.invRecProvince==''){
          this.invoiceType='普通发票 公司';
        }else if(newInvoiceList.invState==2 && newInvoiceList.invRecProvince!=''){
          this.invoiceType='增值税专用发票';
        }
      }else{
        this.openInv=0;
        this.invoiceId='';
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .confirm-order{
    overflow hidden;
    .receiving-info{
      height .65rem;
      padding .15rem .1rem;
      background #fff;
      box-sizing border-box;
      a{
        display block;
        width 100%;
        height 100%;
      }
      div{
        height 100%;
      }
      div:first-child{
        float left;
        p{
          font-size .15rem;
          color #333;
          line-height 1.27;
        }
        .p1{
          span{
            font-weight bold;
          }
        }
        .p2{
        }
      }
      div:last-child{
        float right;
        i{
          color #ccc;
          font-size .12rem;
          line-height .35rem;
        }
      }
    }
    .line{
      width 100%;
      height .05rem;
      background url("../../../assets/recive-line.png") repeat-x;
      background-size auto 100%;
      background-color #fff;
    }
    .order-list{
      .settleOneStroe{
        overflow hidden;
      }
      .shop-name{
        height .45rem;
        line-height .45rem;
        padding-left .1rem;
        font-size .14rem;
        color: #333;
        border-bottom 1px solid #e5e5e5;
        font-weight bold;
        margin-top .1rem;
        background #fff;
      }
      .goods-info{
        padding .15rem .1rem;
        overflow hidden;
        border-bottom 1px solid #e5e5e5;
        background #fff;
        .goods-pho{
          width .7rem;
          height .7rem;
          float left;
          overflow hidden;
          margin-right .2rem;
          img{
            width 100%;
            height 100%;
          }
        }
        .goods-coninfo{
          margin-left .9rem;
          .info{
            p{
              font-size .12rem;
            }
            .p1{
              color #333;
              line-height .2rem;
              text-align justify;
            }
            .p2{
              color #999;
              margin-top .06rem;
            }
          }
          .price-num{
            overflow hidden;
            margin-top .2rem;
            .price{
              float left;
              color #d74a45;
              span:first-child{
                font-size .12rem;
              }
              span:last-child{
                font-size .16rem;
              }
            }
            .num{
              float right;
              color #999;
              margin-right .1rem;
              span:first-child{
                font-size .14rem;
              }
              span:last-child{
                font-size .15rem;
              }
            }
          }
        }
      }
      .goods-info:last-child{
        border-bottom none;
      }
    }
    .invoice-info{
      margin-top .1rem;
      background #fff;
      overflow hidden;
      border-bottom 1px solid #e5e5e5;
      height .45rem;
      a{
        display block;
        width 100%;
        height 100%;
      }
      div{
        height .45rem;
        line-height .45rem;
        padding 0 .1rem;
        i{
          font-size .12rem;
          color #ccc;
        }
      }
      div:first-child{
        float left;
        font-size .16rem;
        color #333;
      }
      div:last-child{
        float right;
        font-size .12rem;
        color #333;
      }
    }
    .invoice-info:last-child{
      margin-top 0;
      border none;
    }
    .total-price{
      margin-top .1rem;
      background #fff;
      padding 0 .1rem;
      overflow hidden;
      div{
        margin-top .15rem;
        overflow hidden;
        span:first-child{
          float left;
          font-size .16rem;
          color #333;
        }
        span:last-child{
          float right;
          font-size .16rem;
          color #d74a45;
          font-weight bold;
        }
        i{
          font-style normal;
          color #333;
          font-weight bold;
        }
      }
    }
    .wx-pay{
      padding .25rem .1rem;
      background #fff;
      div{
        width 100%;
        height .45rem;
        line-height .45rem;
        text-align center;
        color #fff;
        font-size .16rem;
        background #54b736;
        border-radius 4px;
      }
    }
  }
</style>
