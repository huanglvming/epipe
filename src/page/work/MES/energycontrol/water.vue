<template>
  <div class="power-wrapper">
    <top-header title="水耗分析" bgcolor="#fd545c" native="native"></top-header>
    <div class="selection-wrapper">
      <div class="selection-bar">
        <div class="selection-item" :class="{'tab-active':contentType === 1}" @click="tabSelection(1)">
          <span v-if="selection.workshop">{{selection.workshop}}</span>
          <span v-else>车间</span>
        </div>
        <div class="selection-item" :class="{'tab-active':contentType === 2}" @click="tabSelection(2)">
          <span v-if="selection.date">{{selection.date}}</span>
          <span v-else>日期</span>
        </div>
        <div class="selection-item" :class="{'tab-active':contentType === 3}" @click="tabSelection(3)">
          <span v-if="selection.unit">{{selection.unit}}</span>
          <span v-else>单位</span>
        </div>
      </div>
      <div class="selection-content" v-show="!showContent">
        <div class="workshop-content" v-if="contentType === 1">
          <div class="choose-item" v-for="(item,index) in workshopList" :key="index" @click="selectWorkshop(index)">
            {{item.workshopName}}
          </div>
        </div>
        <div class="date-content" v-if="contentType === 2">
          <date-picker @childEvent="dateEvent"></date-picker>
        </div>
        <div class="unit-content" v-if="contentType === 3">
          <div class="choose-item" v-for="(item,index) in unitList" :key="index" @click="selectUnit(index)">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    <div class="content" v-show="showContent">
      <div class="no-result" v-if="!result">
        <svg class="icon" aria-hidden="false" style="width:1.2rem;height:1.2rem;">
          <use xlink:href="#icon-chaxuntiaojian"></use>
        </svg>
        <p class="tips">点击条件筛选进行查询</p>
      </div>
      <div class="result" v-else>

      </div>
    </div>
    <footer>
      <footer>
        <router-link to="/materieldaily" tag="div" class="tab-item">
          <svg class="icon" aria-hidden="false">
            <use xlink:href="#icon-shuihaofenxiactive"></use>
          </svg>
          <p class="tab-title tab-active">水耗分析</p>
        </router-link>
        <router-link to="/power" tag="div" class="tab-item">
          <svg class="icon" aria-hidden="false">
            <use xlink:href="#icon-shuihaofenxiline"></use>
          </svg>
          <p class="tab-title">电耗分析</p>
        </router-link>
      </footer>
    </footer>
  </div>
</template>

<script>
  const TopHeader = () => import("../../../../components/topheader.vue");
  const DatePicker = () => import("../../../../components/DatePicker3.vue");
  export default{
    name: "Water",
    components:{
      TopHeader,
      DatePicker
    },
    data(){
      return{
        result: false,
        workshopList: [],
        unitList: ["日分析","周分析","月分析"],
        showContent: true,
        contentType: 0,
        selection:{
          date: "",
          workshop: "",
          workshopId: "",
          unit: ""
        },
      }
    },
    watch:{
      selection:{
        handler(curVal){
          this.getData(curVal);
        },
        deep:true
      }
    },
    methods:{
      tabSelection(index){
        this.contentType = index;
        this.showContent = false;
      },
      dateEvent(ms){
        let date = new Date(ms);
        this.selection.date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        this.contentType = 0;
        this.showContent = true;
        if(!this.selection.unit){
          this.selection.unit = "日分析";
        }
        if(!this.selection.workshop){
          this.selection.workshop = "所有车间";
        }
      },
      /*获取车间*/
      getWorkshop(){
        this.$mes.get("/common/workshop").then(res =>{
          console.log("获取车间",res);
          if(res.h.code === 200){
            this.workshopList = res.b.list;
            this.workshopList.unshift({
              workShopId: "",
              workshopName: "所有车间"
            });
          }
        });
      },
      /*选择车间*/
      selectWorkshop(index){
        this.selection.workshop = this.workshopList[index].workshopName;
        this.selection.workshopId = this.workshopList[index].workShopId;
        this.contentType = 0;
        this.showContent = true;
      },
      /*选择单位*/
      selectUnit(index){
        this.selection.unit = this.unitList[index];
        this.contentType = 0;
        this.showContent = true;
      },
      /*获取数据*/
      getData(selection){
        if(selection.date){
          this.$mes.get("/energy/water/hour",{
            "workShopId": selection.workshopId,
            "workDate": selection.date
          }).then(res =>{
            console.log("水耗分析",res);
            if(res.h.code === 200){
              this.result = true;
              if(this.selection.unit === "日分析"){
                let timeList = [],
                outputList = [];
                res.b.powerConsumptionDay[0].data.forEach(function(item,index){
                  timeList.push(item.workPeriod);
                  outputList.push(item.outputQty);
                });
                let params = {
                  time: timeList,
                  outputQty: outputList,
                  title: "日用水统计",
                  legend: ["用电量"]
                };
                setTimeout(()=>{
                  this.echarts(params,1);
                },0);
              }else if(this.selection.unit === "月分析"){
                let a = [],b = [];
                res.b.powerConsumptionMonthCompare[0].data.forEach(function(item,index){
                  a.push(item.outputQty);
                });
                res.b.powerConsumptionMonthCompare[1].data.forEach(function(item,index){
                  b.push(item.outputQty);
                });
                let params = {
                  a: a,
                  b: b,
                  title: "月用水量对比",
                  legend: ['本月','上个月','用水量'],
                  xAxis: [1,2,3,4,5,6,7,8,9,10,11,12]
                };
                setTimeout(()=>{
                  this.echarts(params,2);
                },0);
              }else{
                let a = [],b = [];
                res.b.powerConsumptionWeekCompare[0].data.forEach(function(item,index){
                  a.push(item.outputQty);
                });
                res.b.powerConsumptionWeekCompare[1].data.forEach(function(item,index){
                  b.push(item.outputQty);
                });
                let params = {
                  a: a,
                  b: b,
                  title: "周用水量对比",
                  legend: ['本周','上周','用水量'],
                  xAxis: ['周一','周二','周三','周四','周五','周六','周日']
                };
                setTimeout(()=>{
                  this.echarts(params,2);
                },0);
              }
            }else{
              this.$toast("网络请求错误");
            }
          });
        }
      },
      /*绘图*/
      echarts(params,type){
        var target  = document.querySelector(".result");
        if(type === 1){
          let el = echarts.init(target);
          el.clear();
          this.echartsLib.MutipleBars(el,params);
        }else{
          let el = echarts.init(target);
          el.clear();
          this.echartsLib.compare(el,params);
        }
      }
    },
    created(){
      this.getWorkshop();
    },
  }
</script>

<style lang="stylus">
  .selection-wrapper{
    position: fixed;
    top: 0.6rem;
    left: 0;
    right: 0;
    width 3.45rem;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 20px rgba(253,84,92,0.1);
  }
  .selection-bar{
    display: flex;
    justify-content space-between;
    height: 0.45rem;
    background: white;
  }
  .selection-item{
    flex: 1;
    height: 100%;
    line-height: 0.45rem;
    text-align: center;
    font-size: 0.17rem;
    color: #333;
    white-space: nowrap;
  }
  .selection-content{
    background: #fff;
    border-top: 1px solid #ebebeb;
  }
  .workshop-content,.unit-content{
    padding-left: 0.15rem;
  }
  .choose-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.44rem;
    padding-right: 0.15rem;
    line-height: 0.44rem;
    font-size: 0.17rem;
    color: #333;
  }
  .choose-item:not(:last-child){
    border-bottom: 1px solid #ebebeb;
  }
  .no-result{
     margin-top 1.17rem;
     text-align center;
     .tips{
       margin-top: 0.1rem;
       font-size 0.17rem;
       color: #666;
     }
   }
  .result{
    height: 4rem;
    width: 3.45rem;
    padding: 0.15rem 0;
    background: white !important;
  }
  .content{
    position fixed;
    top 1.2rem;
    left 0;
    right 0;
    width: 3.45rem;
    margin: 0 auto;
  }
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 6px 0;
    display: flex;
    justify-content space-between;
    background: white;
  }
  .tab-item{
    flex: 1;
    text-align center;
  }
  .icon{
    width: 22px;
    height: 22px;
  }
  .tab-title{
    font-size: 11px;
    color: #999999;
  }
  .tab-active{
    color: #ff8800;
  }
</style>
