<template>
  <div>
    购物车列表
    <footer-tab :category="2"></footer-tab>
  </div>
</template>
<script>
  import FooterTab from "../../../components/mall/FooterTab.vue";
  document.title="购物车";
  export  default{
    components:{
      FooterTab,
    }
  }
</script>
<style lang="stylus" scoped>

</style>
