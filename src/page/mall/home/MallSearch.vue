<template>
  <div class="search-wrapper">
    <div class="search-wrapper">
      <div class="search-container">
        <div class="search-bar-vice">
          <i class="iconfont icon-sousuoicon"></i>
          <input type="text" class="search-input-vice" v-model="searchKey">
        </div>
        <div class="search-btn">搜索</div>
      </div>
      <div class="suggestion-content" v-if="showSuggestion">
        <div class="history">
          <p class="sub-title">最近搜索</p>
          <div class="suggestions">
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">手表</div>
            <div class="suggestion-item">儿童</div>
            <div class="suggestion-item">儿</div>
            <div class="suggestion-item">童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
          </div>
        </div>
        <div class="hot">
          <p class="sub-title">热门搜索</p>
          <div class="suggestions">
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">手表</div>
            <div class="suggestion-item">儿童</div>
            <div class="suggestion-item">儿</div>
            <div class="suggestion-item">童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
            <div class="suggestion-item">儿童手表</div>
          </div>
        </div>
      </div>
      <div class="related-search">
        <div class="related-item"></div>
        <div class="related-item"></div>
        <div class="related-item"></div>
        <div class="related-item"></div>
        <div class="related-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "Search",
    data(){
      return{
        showSuggestion: true,
        searchKey: "",
        t: null,
      }
    },
    watch:{
      searchKey(){
        this.handleSearch();
      }
    },
    methods:{
      handleSearch(){
        clearTimeout(this.t);
        this.t = setTimeout(() =>{
          if(this.searchKey){
            this.showSuggestion = false;
            console.log(this.searchKey);
          }else{
            this.showSuggestion = true;
          }
        },200);
      }
    }
  }
</script>

<style lang="stylus" scoped="true">
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
    background: white;
    border-bottom 1px solid #e5e5e5;
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
      width: 3rem;
      height inherit;
      font-size 0.14rem;
      color: #ccc;
      outline none;
      background transparent;
    }
  }
  .search-bar-vice{
    width: 2.65rem;
    height: 29px;
    line-height 29px;
    padding 0 0.1rem;
    border-radius 0.145rem;
    background: #f2f2f5;
    .search-input-vice{
      width 2.4rem;
      height inherit;
      font-size 0.14rem;
      color: #ccc;
      outline none;
      background transparent;
    }
  }
  .search-btn{
    width: 0.5rem;
    height: 29px;
    border-radius 4px;
    background: #d74a45;
    color: white;
    line-height 29px;
    text-align center;
  }
  .suggestion-content{
    margin-top 46px;
    padding 0.2rem 0.15rem;
    background: white;
    border-bottom 1px solid #e5e5e5;
  }
  .sub-title{
    font-size: 0.11rem;
    color: #666;
    margin-bottom 0.15rem;
  }
  .hot .sub-title{
    margin-top 0.2rem;
  }
  .suggestions{
    font-size 0;
  }
  .suggestion-item{
    display inline-block;
    height: 0.3rem;
    line-height 0.3rem;
    padding: 0 4px;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
    text-align center;
    font-size 0.12rem;
    color #666;
    border: 1px solid #e5e5e5;
    background #efefef;
    cursor pointer;
  }
  .related-search{
    margin-top: 46px;
    background: white;
    border-bottom: 1px solid #e5e5e5;
  }
  .related-item{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #d74745;
  }
  .related-item:not(:last-child){
    border-bottom: 1px dotted #e5e5e5;
  }
</style>
