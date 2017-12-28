<template>
  <div class="goods-class">
    <div class="search-container" ref="search">
      <div class="search-bar">
        <svg class="icon icon-search" aria-hidden="false">
          <use xlink:href="#icon-sousuoicon"></use>
        </svg>
        <input type="text" class="search-input">
      </div>
    </div>
    <div class="class-area">
      <div class="class-area-l">
        <ul ref="classpart">
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>手机数码</li>
          <li>电脑办公</li>
        </ul>
      </div>
      <div class="class-area-r">
        <div class="con-class"  ref="conClass">
          <div class="class-tit">手机</div>
          <ul>
            <li>商务手机</li>
            <li>商务手机</li>
            <li>商务手机</li>
            <li>商务手机</li>
            <li>商务手机</li>
            <li>儿童手机</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
  export  default {
    mounted () {
      this.axios.get(this.baseURL.mall+"/m/search/goodsClass",).then(res =>{
        console.log(res);
      });
      let searchH=window.getComputedStyle(this.$refs.search).height.replace("px","");
      console.log(searchH);
      let winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      console.log(winH);
      let classH=winH-searchH;
      this.$refs.classpart.style.height = classH +'px';
      this.$refs.conClass.style.height = classH +'px';
    }
  }
</script>
<style lang="stylus" scoped>
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
    width: 0px;
  }
  .goods-class{
    width 100%;
    min-height 100%;
    background #fff;
    position absolute;
  }
  .search-container{
    box-sizing border-box;
    display flex;
    justify-content center;
    align-items center;
    width: 100%;
    height: 0.45rem;
    background #fff;
    position fixed;
    z-index 2;
    .search-bar{
      width: 3.25rem;
      height: 0.29rem;
      line-height 0.29rem;
      padding 0 0.1rem;
      background #f2f2f5;
      border-radius 0.145rem;
    }
    .icon-search{
      width: 0.14rem;
      height: 0.15rem;
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
  .class-area{
    overflow hidden;
    border-top 1px solid #e5e5e5;
    margin-top .45rem;
    .class-area-l{
      width .8rem;
      float left;
      ul{
        overflow-y scroll;
        li{
          width 100%;
          height .45rem;
          line-height .45rem;
          border-bottom 1px solid #e5e5e5;
          background #f0f0f5;
          font-size .12rem;
          color #666;
          text-align center;
        }
      }
      ul::-webkit-scrollbar {/*隐藏滚轮*/
        display: none;
        width: 0px;
      }
      ul li:first-child{
        background #fff;
        color #ff8800;
      }
      ul li:last-child{
        border-bottom none;
      }
    }
    .class-area-r{
      width 100%;
      margin-left .95rem;
      .con-class{
        overflow-y scroll;
      }
      .con-class::-webkit-scrollbar {/*隐藏滚轮*/
        display: none;
        width: 0px;
      }
      .class-tit{
        height .4rem;
        line-height .4rem;
        font-size .12rem;
        color #333;
        border-bottom 1px solid #e5e5e5;
      }
      ul{
        overflow hidden;
        margin-top .15rem;
        li{
          font-size .12rem;
          color #666;
          margin 0 .25rem .15rem 0;
          float left;
        }
      }
    }
  }
 
</style>
