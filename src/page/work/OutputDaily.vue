<template>
  <div class="output-daily">
    <top-header :bgcolor="headerPros.bgcolor" :title="headerPros.title"></top-header>
    <selection-bar ref="selection" :msg="dailydata"></selection-bar>
    <div class="current-selections" v-show="workshop || workline || product || date">
      <div class="current-selections-content">
        <span class="workshop">{{workshop}}</span>
        >
        <span class="workline">{{workline}}</span>
        >
        <span class="product">{{product}}</span>
        >
        <span class="date">{{date}}</span>
        <div class="icon-close-container" @click="close()">
          <svg class="icon icon-close" aria-hidden="false">
            <use xlink:href="#icon-guanbi"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="no-result" v-if="!result">
        <svg class="icon" aria-hidden="false" style="width:1.2rem;height:1.2rem;">
          <use xlink:href="#icon-chaxuntiaojian"></use>
        </svg>
        <p class="tips">输入工号或点击“更多”进行查询</p>
      </div>
    </div>
    <output-tab :category="2"></output-tab>
  </div>
</template>

<script>
  import TopHeader from "../../components/topheader.vue"
  import OutputTab from "../../components/MES/OutputTab.vue"
  import SelectionBar from "../../components/MES/SelectionBar.vue"
  export default{
    name: 'OutputDaily',
    components:{
      TopHeader,
      OutputTab,
      SelectionBar,
    },
    data(){
      return{
        headerPros:{
          bgcolor: "#499844",
          title: "产出日报",
        },
        module: "daily",
        dailydata:{
          workshop: "",
          workline: "",
          product: "",
          date: "",
        },
        workshop: "",
        workline: "",
        product: "",
        date: "",
      }
    },
    watch:{
      dailydata:{
        handler(curVal,oldVal){
          this.fn(curVal);
        },
        deep:true
      }
    },
    methods:{
      fn(obj){
        this.workshop = obj.workshop?obj.workshop:"所有车间";
        this.workline = obj.workline?obj.workline:"所有产线";
        this.product = obj.product?obj.product:"所有产品";
        this.date = obj.date?obj.date:"今天";
        console.log("数据更新",obj);
      },
      close(){
        let $ref = this.$refs.selection.store;
        this.workshop = this.workline = this.product = this.date = "";
        $ref.workshop = $ref.workline = $ref.product =  $ref.date = "";
      }
    },
    mounted(){
    },
  }
</script>

<style lang="stylus" scoped>
  .no-result{
    margin-top 2.17rem;
    text-align center;
    .tips{
      margin-top: 0.1rem;
      font-size 0.17rem;
      color: #666;
    }
  }
  .current-selections{
    box-sizing: border-box;
    z-index: -1;
    position: fixed;
    left: 0;
    right: 0;
    top: 1.15rem;
    width: 3.45rem;
    height: 0.4rem;
    margin: auto;
    padding: 0 0.15rem;
    line-height: 0.4rem;
    font-size: 0.13rem;
    color: #666;
    border-radius: 0.02rem;
    background: white;
    box-shadow: 0 0 20px rgba(15,194,124,0.15);
  }
  .current-selections-content{
    position relative;
    width 100%
    height 100%;
  }
  .icon-close-container{
    position: absolute;
    right: -0.15rem;
    top: -0.05rem;
  }
  .icon-close{
    width: 0.22rem;
    height: 0.22rem;
  }
</style>
