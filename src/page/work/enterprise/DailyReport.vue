<template>
  <div class="carousel-wrapper">
    <div class="header">
      <top-header title="企业日报"></top-header>
      <date-picker v-on:childEvent="prosDate"></date-picker>
    </div>
  </div>
</template>

<script>
  import TopHeader from "../../../components/topheader.vue"
  import DatePicker from "../../../components/DatePicker.vue"
  export default{
    name: "Carousel",
    components:{
      TopHeader,
      DatePicker,
    },
    methods:{
      prosDate(ms){
        let obj = new Date(ms);
        let date = obj.getFullYear()+"-"+parseInt(obj.getMonth()+1)+"-"+obj.getDate();
        console.log(date);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header{
    background: #609EF7;
  }
</style>
