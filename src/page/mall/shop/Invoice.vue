<template>
  <div class="invoice">
    <div><span class="sp1">发票类型</span><span class="sp2">{{InvoiceType}}</span></div>
    <div @click="NoInvoiceFun"><span class="sp1"><i class="iconfont" :class="NoInvoiceSel ? 'icon-xuanzhong1 red' : 'icon-weixuan gray'"></i>不开发票</span></div>
    <div @click="NorInvoiceFun"><span class="sp1"><i class="iconfont" :class="NorInvoiceSel ? 'icon-xuanzhong1 red' : 'icon-weixuan gray'"></i>普通发票</span></div>
    <div @click="SpeInvoiceFun"><span class="sp1"><i class="iconfont" :class="SpeInvoiceSel ? 'icon-xuanzhong1 red' : 'icon-weixuan gray'"></i>增值税专用发票</span></div>
    <article v-if="NorInvoiceSel">
      <div class="invoice-header"><span class="sp1">发票抬头</span><span class="sp2">{{InvHeacon}}</span></div>
      <div @click="PerInvoiceHeaFun">
        <span class="sp1"><i class="iconfont" :class="PerInvoiceHea ? 'icon-xuanzhong1 red' : 'icon-weixuan gray'"></i>个人</span>
        <span class="sp2" v-if="PerInvoiceHea"><input type="text" placeholder="请输入个人名字" v-model="InvHeacon"></span>
      </div>
      <div @click="ComInvoiceHeaFun">
        <span class="sp1"><i class="iconfont" :class="ComInvoiceHea ? 'icon-xuanzhong1 red' : 'icon-weixuan gray'"></i>公司</span>
        <span class="sp2" v-if="ComInvoiceHea"><input type="text" placeholder="请输入公司全称"  v-model="InvHeacon"></span>
      </div>
      <div v-if="ComInvoiceHea"><span class="sp1"><i  class="iconfont"></i>纳税人识别号</span><span class="sp2"><input type="text" placeholder="请输入纳税人识别号"></span></div>
      <div class="invoice-header"><span class="sp1">普通商品发票内容</span><span class="sp2">{{InvoiceCon}}</span></div>
      <div v-for="(obj,index) in InvoiceConArr" @click="InvoiceConFun(index,obj)">
        <span class="sp1"><i class="iconfont" :class="InvoiceConIndex==index ?  'icon-xuanzhong1 red' : 'icon-weixuan gray'"></i>{{obj}}</span>
      </div>
    </article>
    <article v-if="SpeInvoiceSel">
      <div  class="invoice-header">
        <a href="#/SpecialInvoice">
          <span class="sp1">增票资质</span><span class="sp2"><i class="iconfont icon-jinru"></i></span>
        </a>
      </div>
      <section><span class="sp1">单位名称</span><span class="sp2">深圳前海优管信息技术有限公司</span></section>
      <section><span class="sp1">纳税人识别号</span><span class="sp2">9875 2356 1254 158</span></section>
      <section><span class="sp1">注册地址</span><span class="sp2">深圳南山区</span></section>
      <section><span class="sp1">注册电话</span><span class="sp2">12314564654</span></section>
      <section><span class="sp1">开户银行</span><span class="sp2">平安银行</span></section>
      <section><span class="sp1">银行账号</span><span class="sp2">4461231489744165132</span></section>
      <section><span class="sp1">发票内容</span><span class="sp2">商品明细</span></section>
      <section><span class="sp1">收票人姓名</span><span class="sp2">深圳南山区</span></section>
      <section><span class="sp1">收票人手机</span><span class="sp2">18645214555</span></section>
      <section><span class="sp1">所在地区</span><span class="sp2">深圳南山区</span></section>
      <section><span class="sp1">详细地址</span><span class="sp2">深圳南山区</span></section>
    </article>
    <section class="confimBtn">确认</section>
  </div>
</template>
<script>
  document.title="发票";
  export default {
    data:function () {
      return{
        InvoiceType:'不开发票',
        NoInvoiceSel:true,        //不开发票选择
        NorInvoiceSel:false,      //普通发票选
        SpeInvoiceSel:false,      //增值税发票选择
        PerInvoiceHea:true,       //普通发票个人
        ComInvoiceHea:false,      //普通发票公司
        InvHeacon:'',              //发票抬头
        InvoiceConArr:['商品明细','文具','电脑配件','耗材','日用品','电器数码','家具建材','日化用品'] ,
        InvoiceConIndex:'',
        InvoiceCon:'商品明细'
        
      }
    },
    methods:{
      NoInvoiceFun(){
        this.NoInvoiceSel=true;
        this.NorInvoiceSel=false;
        this.SpeInvoiceSel=false;
        this.InvoiceType='不开发票';
      },
      NorInvoiceFun(){
        this.NoInvoiceSel=false;
        this.NorInvoiceSel=true;
        this.SpeInvoiceSel=false;
        this.InvoiceType='普通发票';
      },
      SpeInvoiceFun(){
        this.NoInvoiceSel=false;
        this.NorInvoiceSel=false;
        this.SpeInvoiceSel=true;
        this.InvoiceType='增值税专用发票';
      },
      PerInvoiceHeaFun(){
        this.PerInvoiceHea=true;
        this.ComInvoiceHea=false;
      },
      ComInvoiceHeaFun(){
        this.PerInvoiceHea=false;
        this.ComInvoiceHea=true;
      },
      InvoiceConFun(index,obj){
        this.InvoiceConIndex=index;
        this.InvoiceCon=obj;
      }
    },
    created(){
      console.log(localStorage.getItem("SpecialInvoice"));
      if(localStorage.getItem("SpecialInvoice")=='true'){
        this.SpeInvoiceFun();
        localStorage.removeItem("SpecialInvoice");
        let InvoiceArrNew=localStorage.getItem("InvoiceInfo").split(",");
        console.log(InvoiceArrNew);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .invoice{
    overflow hidden;
    article{
      overflow hidden;
    }
    div{
      position relative;
      height .45rem;
      line-height .45rem;
      padding 0 .1rem;
      background #fff;
      overflow hidden;
      .sp1{
        float left;
        font-size .14rem;
        color #333;
        i{
          font-size .18rem;
          margin-right .1rem;
          vertical-align middle;
        }
        .red{
          color  #d74a45;
        }
        .gray{
          color #ccc;
        }
      }
      .sp2{
        float right;
        font-size .12rem;
        color #666;
        i{
          color #ccc;
          font-size .14rem;
        }
      }
      input{
        width 2.45rem;
        height .25rem;
        background #f3f3f5;
        border-radius 2px;
        font-size .12rem;
        color #333;
        padding-left .1rem;
        box-sizing border-box;
      }
      input:focus{
        outline none;
      }
    }
    .invoice-header{
      margin-top .1rem;
      a{
        display block;
        width 100%;
        height 100%;
      }
    }
    section{
      height .45rem;
      line-height .45rem;
      overflow hidden;
      padding 0 .1rem;
      background #fff;
      span{
        display inline-block;
        font-size .12rem;
        height 100%;
        float left;
      }
      .sp1{
        width .72rem;
        text-align left;
        color #999;
      }
      .sp2 {
        color #333;
        margin-left .15rem;
      }
    }
    .confimBtn{
      height .5rem;
      line-height .5rem;
      text-align center;
      font-size .16rem;
      color #fff;
      margin-top .75rem;
      background #d74a45;
    }
  }
  .invoice div:after{
    content: "";
    position absolute;
    left 0;
    bottom 0;
    width 100%;
    height 1px;
    background #e5e5e5;
    transform scaleY(0.5);
  }
</style>
