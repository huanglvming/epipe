<template>
  <div class="output-live">
    <top-header bgcolor="#499844" title="产出统计" native="native"></top-header>
    <div class="selections">
      <div class="selection-tabs">
        <div class="selection" :class="{'selection-active': tabItem === 1}" @click="tab(1)">{{selection.workshop}}</div>
        <div class="selection" :class="{'selection-active': tabItem === 2}" @click="tab(2)">{{selection.workline}}</div>
        <div class="selection" :class="{'selection-active': tabItem === 3}" @click="tab(3)">
          <div v-if="start_time.month || end_time.month">
            <span v-if="start_time.month">{{start_time.month}}/{{start_time.day}}</span><span v-else>起始时间</span>
            ~
            <span v-if="end_time.month">{{end_time.month}}/{{end_time.day}}</span><span v-else>至今</span>
          </div>
          <div v-else>日期</div>
        </div>
      </div>
      <div class="selections-items" v-show="mask">
        <div class="workshop" v-show="tabItem === 1">
          <div class="selection-item" v-for="(item,index) in workshop_arr" :key="index" @click="workshopSelect(index)">
            {{item.workshopName}}
          </div>
        </div>
        <div class="workline" v-show="tabItem === 2">
          <div class="selection-item" v-for="(item,index) in workline_arr" :key="index" @click="worklineSelect(index)">
            {{item.lineName}}
          </div>
        </div>
        <div class="workdate" v-show="tabItem === 3" style="margin-left: -0.15rem;">
          <div class="workdate-type" v-if="workdateSelect">
            <div>
              <div class="btn btn-start" @click="selectTime(1)"> 起始时间</div>
            </div>
            <div>
              <div class="btn btn-end" @click="selectTime(2)"> 结束时间</div>
            </div>
          </div>
          <div class="wordate-wrapper" v-else>
            <div class="date-picker" style="background: white;">
              <div class="current-date" style="display: flex;justify-content: space-around;height:0.45rem;line-height: 0.45rem;text-align: center;border-bottom: 1px solid #ebebeb;">
                <div class="icon-container" style="width: 1rem;" @click="lastMonth">
                  <svg class="icon" aria-hidden="false">
                    <use xlink:href="#icon-zuoyoujiantou"></use>
                  </svg>
                </div>
                <div class="date">{{dateObj.year}}年{{dateObj.month}}月</div>
                <div class="icon-container" style="width: 1rem; transform: rotate(180deg)" @click="nextMonth">
                  <svg class="icon" aria-hidden="false">
                    <use xlink:href="#icon-zuoyoujiantou"></use>
                  </svg>
                </div>
              </div>
              <div class="date-content">
                <ul class="day-list" style="display: flex;justify-content: space-around;height:0.45rem;line-height: 0.45rem;">
                  <div class="day-item">一</div>
                  <div class="day-item">二</div>
                  <div class="day-item">三</div>
                  <div class="day-item">四</div>
                  <div class="day-item">五</div>
                  <div class="day-item">六</div>
                  <div class="day-item">日</div>
                </ul>
                <div class="date-list" style="display: flex;flex-wrap: wrap;padding: 0.1rem 0;">
                  <div class="date-item" v-for="(item,index) in days" :key="index" @click="pickDate(index)" style="width:14.28%;height:0.34rem;line-height: 0.34rem;text-align: center;">
                    <div :class="{active: (item === currentDate.day && dateObj.year === currentDate.year && dateObj.month === currentDate.month )}">{{item}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content" :class="{'content-bg':result}" v-show="showContent">
      <div class="no-result" v-if="!result">
        <svg class="icon" aria-hidden="false" style="width:1.2rem;height:1.2rem;">
          <use xlink:href="#icon-chaxuntiaojian"></use>
        </svg>
        <p class="tips">点击条件筛选进行查询</p>
      </div>
      <div class="result-wrapper" v-else>
        <div class="result" v-for="(item,index) in result_length" :id="index">
          <div class="my-selections">
            <p>车间: {{objs[index].workshopName}}</p>
            <p>产线: {{objs[index].lineName}}</p>
            <p>时间: {{objs[index].workDate}}</p>
          </div>
          <div class="my-echarts" ref="echarts"></div>
          <div class="information-wrapper">
            <div class="info-item">
              <p><span class="info-title">达成率:</span> <span class="info-number info-green">{{objs[index].achievingRate}}</span></p>
              <p><span class="info-title">差异数量:</span> <span class="info-number info-orange">{{objs[index].differenceNumber}}</span></p>
            </div>
            <div class="flex-item">
              <p><span class="info-title">计划完成:</span> <span class="info-number info-blue">{{objs[index].woFinishQty}}</span></p>
              <p><span class="info-title">实际完成:</span> <span class="info-number info-red">{{objs[index].woQty}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <output-tab :category="3"></output-tab>
  </div>
</template>

<script>
  const TopHeader = () => import("../../../../components/topheader.vue");
  const OutputTab = () => import("../../../../components/MES/OutputTab.vue");
  function DateFormat(date) { //封装一个方法点击左右 改变头部那个时间的显示
    let now = new Date(date);
    let dateObj = {};
    dateObj.year = now.getFullYear();
    dateObj.month = now.getMonth() + 1;
    dateObj.date = (now.getMonth() + 1) + "月" + now.getDate() + "日";
    dateObj.day = now.getDate();
    return dateObj;
  }
  /*设置天数数组*/
  function setDaysArr(year,month){
    let arr = [];
    let d = new Date(year,month,0);
    let daycount = d.getDate();
    /*计算当月1号对应星期几*/
    let blankLenth = new Date(year+'/'+month+'/1').getDay();
    blankLenth = (blankLenth === 0) ? 6 : blankLenth-1;
    for(var i=1;i<=daycount;i++){
      arr.push(i);
    }
    return new Array(blankLenth).concat(arr);
  }
  export default{
    name: 'OutputCount',
    components:{
      TopHeader,
      OutputTab,
    },
    data(){
      return{
        tabItem: null,
        mask: false,
        showContent: true,
        result: true,
        date: "日期",
        workshop_arr:[],
        workline_arr:[],
        dateObj: {},
        currentDate:{},
        workdateType: 0,
        workdateSelect: true,
        start_time:{},
        end_time: {},
        days: [],
        showDatePicker: false,
        result_length: 0,
        selection:{
          workshop: "车间",
          workshop_id: "",
          workline: "产线",
          workline_id: "",
          start_time: "",
          end_time: "",
        },
        objs: [],
      }
    },
    watch:{
      selection:{
        handler(curVal){
          console.log("选择条件发生变化",curVal);
          this.getData(curVal.workshop_id,curVal.workline_id,curVal.start_time,curVal.end_time);
        },
        deep:true
      }
    },
    methods:{
      /*切换条件*/
      tab(num){
        this.mask = true;
        this.showContent = false;
        this.tabItem = num;
        if(num === 2 && this.selection.workshop == '车间'){
          this.$toast("请选择车间");
        }
        if(num === 3){
          this.workdateSelect = true;
        }
      },
      /*选择车间*/
      workshopSelect(index){
        this.selection.workshop = this.workshop_arr[index].workshopName;
        this.selection.workshop_id = this.workshop_arr[index].workShopId;
        this.mask = false;
        this.showContent = true;
        this.tabItem = null;
        this.getWorkline(this.workshop_id);
      },
      /*选择产线*/
      worklineSelect(index){
        this.selection.workline = this.workline_arr[index].lineName;
        this.selection.workline_id = this.workline_arr[index].lineId;
        this.mask = false;
        this.showContent = true;
        this.tabItem = null;
      },
      /*前一个月*/
      lastMonth(){
        if(this.dateObj.month>1){
          this.dateObj.month --;
        }else{
          this.dateObj.month = 12;
          this.dateObj.year --;
        }
        this.days = setDaysArr(this.dateObj.year,this.dateObj.month);
      },
      /*后一个月*/
      nextMonth(){
        if(this.dateObj.month<12){
          this.dateObj.month ++;
        }else{
          this.dateObj.month = 1;
          this.dateObj.year ++;
        }
        this.days = setDaysArr(this.dateObj.year,this.dateObj.month);
      },
      /*选择日期*/
      pickDate(index){
        let dateString = this.dateObj.year+""+this.dateObj.month+""+this.days[index];
        let ms = Date.parse(dateString.substr(4,2)+"/"+dateString.substr(6,2)+"/"+dateString.substr(0,4));
        this.ms = ms;
        this.dateObj = DateFormat(ms);
        let date = new Date(ms);
        sessionStorage.setItem("ms",ms);
        this.currentDate = {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        };
        if(this.workdateType === 1){
          this.start_time = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
          };
          this.selection.start_time = date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
          this.workdateSelect = true;
        }else{
          this.end_time = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
          };
          this.selection.end_time = date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
          this.workdateSelect = true;
        }
        if(this.start_time.month && this.end_time.month){
          this.workdateSelect = false;
          this.workdateType = 0;
          this.mask = false;
          this.showContent = true;
          this.tabItem = null;
        }
      },
      /*起始时间 结束时间*/
      selectTime(type){
        this.workdateSelect = false;
        if(type === 1){
          this.workdateType = 1;
        }else{
          this.workdateType = 2;
        }
      },
      /*获取车间*/
      getWorkshop(){
        this.$mes.get("/common/workshop").then(res =>{
          console.log("获取车间",res);
          if(res.h.code === 200){
            this.workshop_arr = res.b.list;
            this.workshop_arr.unshift({
              workShopId: "",
              workshopName: "所有车间"
            });
          }
        });
      },
      /*获取生产线*/
      getWorkline(id){
        this.$mes.get("/common/line?workShopId="+id).then(res =>{
          console.log("获取生产线",res);
          if(res.h.code === 200){
            this.workline_arr = res.b.list;
            this.workline_arr.unshift({
              lineId: "",
              lineName: "所有产线"
            });
          }
        });
      },
      /*获取产出统计数据*/
      getData(workshop_id,workline_id,start_date,end_date){
        this.$mes.get("/produce/outputStatistics",{
          workShopId: workshop_id,
          lineId: workline_id,
          startDate: start_date,
          endDate: end_date
        }).then(res =>{
          console.log("产出统计",res);
          if(res.h.code === 200){
            this.result_length = res.b.length;
            this.objs = res.b;
            setTimeout(()=>{
              for(let i=0;i<res.b.length;i++){
                let params = this.setParams(res.b[i]);
                this.echarts(this.$refs.echarts[i],params);
              }
            },0);
          }
        })
      },
      /*设置echarts参数*/
      setParams(param){
        let vm = this;
        let series_data = [param.woFinishQty,param.woQty];
        let params = {
          title: "产出详情",
          type: ["bar","bar"],
          xAxis: ["实际","计划"],
          yAxis:[{
            type: 'value',
            name: '单位/米',
            nameTextStyle: {
              color: ['#333333'],
              fontSize: 12
            },
            axisLine: { //控制x轴
              lineStyle: {
                color: '#ccc',
                shadowOffsetX: 0
              }
            },
            splitLine: {
              show: false
            },
            axisTick: { //控制y轴刻度
              show: false,
            },
            axisLabel: { //控制刻度标签
              color: '#666',
            },
          },
            {
              type: 'value',
              name: '达成率%',
              nameTextStyle: {
                color: ['#333333'],
                fontSize: 12
              },
              axisLine: { //控制x轴
                lineStyle: {
                  color: '#ccc',
                  shadowOffsetX: 0
                }
              },
              splitLine: {
                show: false, //是否显示y轴指示线
              },
              axisLabel: {
                formatter: '{value}%'
              },
              axisTick: { //控制y轴刻度
                show: false,
              },
              axisLabel: { //控制刻度标签
                color: '#666',
              },
            }],
          series: [{
            name: '计划',
            type: 'bar',
            stack: '计划',
            barWidth: 20,
            data: series_data,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                },
                color: function(params){
                  let colors = ['#00a0b0','#FD545C'];
                  return colors[params.dataIndex];
                },
                barBorderRadius: [500, 500, 0, 0]
              }
            }
          }],
        };
        return params;
      },
      /*绘图*/
      echarts(target,data){
        let el = echarts.init(target);
        this.echartsLib.Bars(el,data);
      }
    },
    created(){
      if(sessionStorage.getItem("ms")){
        let ms = parseInt(sessionStorage.getItem("ms"));
        this.dateObj = DateFormat(ms);
        this.ms = ms;
        let date = new Date(ms);
        this.currentDate = {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        };
        this.selection.date = date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
      }else{
        this.dateObj = DateFormat(new Date());
        this.ms = new Date().getTime();
        this.currentDate = {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate()
        };
      }
      this.days = setDaysArr(this.dateObj.year,this.dateObj.month);
      this.getWorkshop();
    },
    mounted(){
      this.getData();
    },
  }
</script>

<style lang="stylus" scoped>
  .selections{
    position: fixed;
    left: 0;
    top: 0.6rem;
    width: 100%;
  }
  .selection-tabs{
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.45rem;
    background: white;
    box-shadow 0 0 20px rgba(49,98,44,0.15);
  }
  .selection{
    flex: 1;
    height: 100%;
    line-height: 0.45rem;
    text-align: center;
    font-size 0.17rem;
    color: #333;
  }
  .selection-active{
    color: #499844;
  }
  .selections-items{
    padding-left: 0.15rem;
    background: white;
    border-top: 1px solid #ccc;
    box-shadow 0 5px 15px rgba(15,195,124,0.15);
  }
  .selection-item{
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.15rem;
    color: #333;
  }
  .selection-item:not(:last-child){
    border-bottom: 1px solid #ebebeb;
  }
  .no-result{
    margin-top 2.17rem;
    text-align center;
    .tips{
      margin-top: 0.1rem;
      font-size 0.17rem;
      color: #666;
    }
  }
  .active{
    width: 0.34rem;
    height: 0.34rem;
    margin: 0 auto;
    border-radius: 50%;
    background: #609ef7;
    box-shadow: 0 0 10px #609ef7;
    color: #fff;
  }
  .content{
    margin-top: 1.2rem;
    padding: 0 0.15rem;
  }
  .my-echarts{
    height: 4rem;
  }
  .content-bg{
    /*background: white;*/
    padding: 0.2rem 0;
  }
  .workdate-type{
    height: 2.8rem;
    text-align center;
    border-bottom: 1px solid rgb(235, 235, 235);
  }
  .btn{
    display: inline-block;
    width: 1rem;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    border: 1px solid rgb(73, 152, 68);
    color: #333;
  }

  .result-wrapper{
    z-index 5;
    overflow-y auto;
    position fixed;
    left 0;
    right 0;
    top: 1.2rem;
    width 3.45rem;
    max-height 4.8rem;
    margin 0 auto;
  }
  .result{
    box-shadow: rgba(15, 194, 124, 0.15) 0px 0px 20px;
    margin-bottom 0.15rem;
    background: white;
  }
  .my-selections{
    padding: 0.1rem 0;
    margin: 0 0.15rem;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid #EBEBEB;
    p{
      font-size 0.16rem;
      line-height 1.8;
      color #333;
    }
  }
  .my-echarts{
    height: 3rem;
  }
  .information-wrapper{
    display: flex;
    justify-content space-around;
    padding-bottom 0.2rem;
  }
  .info-item{
    height: 0.2rem;
    line-height: 0.2rem;
    font-size 0.13rem;
  }
  .info-title{
    display inline-block;
    width: 5em;
    text-align right;
    color: #333;
  }
  .info-number{
    width: 3em;
    text-align left;
  }
  .info-green{
    color: #0fc37c;
  }
  .info-blue{
    color: #00a0b0;
  }
  .info-orange{
    color: #ff8800;
  }
  .info-red{
    color: #fd545c;
  }
  .no-selection{
    top: 1.15rem;
    max-height: 4.9rem;
  }
</style>
