<template>
  <div class="output-live">
    <top-header :bgcolor="headerPros.bgcolor" :title="headerPros.title"></top-header>
    <div class="selections">
      <div class="selection-tabs">
        <div class="selection" :class="{'selection-active': tabItem === 1}" @click="tab(1)">{{workshop}}</div>
        <div class="selection" :class="{'selection-active': tabItem === 2}" @click="tab(2)">{{workline}}</div>
        <div class="selection" :class="{'selection-active': tabItem === 3}" @click="tab(3)">{{date}}</div>
      </div>
      <div class="selections-items" v-show="mask">
        <div class="workshop" v-show="tabItem === 1">
          <div class="selection-item" v-for="(item,index) in workshop_arr" :key="index" @click="workshopSelect(index)">
            {{item}}
          </div>
        </div>
        <div class="workline" v-show="tabItem === 2">
          <div class="selection-item" v-for="(item,index) in workline_arr" :key="index" @click="worklineSelect(index)">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="no-result" v-if="!result">
        <svg class="icon" aria-hidden="false" style="width:1.2rem;height:1.2rem;">
          <use xlink:href="#icon-chaxuntiaojian"></use>
        </svg>
        <p class="tips">点击条件筛选进行查询</p>
      </div>
    </div>
    <output-tab :category="1"></output-tab>
  </div>
</template>

<script>
  import TopHeader from "../../components/topheader.vue"
  import OutputTab from "../../components/MES/OutputTab.vue"
  export default{
    name: 'OutputLive',
    components:{
      TopHeader,
      OutputTab,
    },
    data(){
      return{
        headerPros:{
          bgcolor: "#499844",
          title: "产出看板",
        },
        tabItem: null,
        mask: false,
        result: false,
        workshop: "车间",
        workline: "产线",
        date: "日期",
        workshop_arr:["所有车间","第一车间","第二车间","第三车间"],
        workline_arr:["所有产线","第一产线","第二产线","第三产线"],
      }
    },
    methods:{
      /*切换条件*/
      tab(num){
        this.mask = true;
        this.tabItem = num;
      },
      /*选择车间*/
      workshopSelect(index){
        this.workshop = this.workshop_arr[index];
        this.mask = false;
        this.tabItem = null;
      },
      /*选择产线*/
      worklineSelect(index){
        this.workline = this.workline_arr[index];
        this.mask = false;
        this.tabItem = null;
      },
    }
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
</style>
