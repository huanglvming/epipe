<template>
  <div class="user-wrapper">
    <div class="user-info">
      <div class="user-info-content">
        <div class="user">
          <div class="avatar"></div>
          <div class="info-content">
            <div class="id">用户名: 18620389989</div>
          </div>
        </div>
        <div class="link-account">
          <i class="iconfont icon-zhanghushezhi"></i>
          账号管理
        </div>
      </div>
    </div>
    <div class="menu-tab">
      <div class="menu-item">
        <div class="number">23</div>
        <div class="title">商品收藏</div>
      </div>
      <div class="menu-item">
        <div class="number">23</div>
        <div class="title">店铺收藏</div>
      </div>
      <div class="menu-item">
        <div class="number">23</div>
        <div class="title">最近浏览</div>
      </div>
    </div>
    <div class="orders">
      <div class="link-item">
        <div class="link-title">我的退货单</div>
        <div class="link-icon">
          <i class="iconfont icon-jinru"></i>
        </div>
      </div>
      <div class="status">
        <div class="status-item">
          <p><i class="iconfont icon-daifukuan"></i></p>
          <p class="item-title">代付款</p>
        </div>
        <div class="status-item">
          <p><i class="iconfont icon-yifukuan"></i></p>
          <p class="item-title">已付款</p>
        </div>
        <div class="status-item">
          <p><i class="iconfont icon-daifahuo"></i></p>
          <p class="item-title">已发货</p>
        </div>
        <div class="status-item">
          <p><i class="iconfont icon-yiwancheng"></i></p>
          <p class="item-title">已完成</p>
        </div>
        <div class="status-item">
          <p><i class="iconfont icon-yiquxiao"></i></p>
          <p class="item-title">已取消</p>
        </div>
      </div>
    </div>
    <div class="links">
      <div class="link-item">
        <div class="link-title">我的退货单</div>
        <div class="link-icon">
          <i class="iconfont icon-jinru"></i>
        </div>
      </div>
      <div class="link-item">
        <div class="link-title">我的退款单</div>
        <div class="link-icon">
          <i class="iconfont icon-jinru"></i>
        </div>
      </div>
      <div class="link-item">
        <div class="link-title">商品评价</div>
        <div class="link-icon">
          <i class="iconfont icon-jinru"></i>
        </div>
      </div>
      <div class="link-item">
        <div class="link-title">我的咨询</div>
        <div class="link-icon">
          <i class="iconfont icon-jinru"></i>
        </div>
      </div>
    </div>
    <footer-tab :category="3"></footer-tab>
  </div>
</template>
<script>
  const FooterTab = () => import("../../../components/mall/FooterTab.vue");
  export default {
    name: "MallUser",
    components:{
      FooterTab
    },
    created(){
      document.title="个人中心";
    }
  }
</script>
<style lang="stylus" scoped="true">
  .user-info{
    padding: 15px 10px;
    background white;
  }
  .user-info-content{
    position relative;
    display flex;
    align-items center;
    height: 120px;
    border-radius: 5px;
    box-shadow 0 0 6px rgb(255,152,152);
    background linear-gradient(to right,#DA4D46,#FF7559);
  }
  .user{
    display flex;
    justify-content flex-start;
    align-items center;
    .avatar{
      width: 0.62rem;
      height: 0.62rem;
      margin-left 0.25rem;
      margin-right 0.15rem;
      border: 1px solid #ff9898;
      border-radius 50%;
      box-shadow 0 2px 4px rgba(0,0,0,0.2);
    }
    .name{
      font-size: 0.14rem;
      color: white;
      line-height 1;
    }
    .id{
      margin-top 0.1rem;
      color: #ffcccc;
      line-height 1;
      font-size 0.11rem;
    }
  }
  .link-account{
    position absolute;
    top: 0.1rem;
    right: 0.1rem;
    color: #993d3d;
    font-size 11px;
    .iconfont{
      color: #993d3d;
      vertical-align: middle;
    }
  }
  .menu-tab{
    display flex;
    justify-content space-between;
    align-items center;
    height: 0.6rem;
    margin-top 0.1rem;
    background white;
  }
  .menu-item{
    flex 1;
    text-align center;
    .number{
      color: #d74a45;
      font-size 0.16rem;
      line-height 1;
    }
    .title{
      margin-top 0.1rem;
      font-size: 0.12rem;
      color: #666;
      line-height 1;
    }
  }
  .orders{
    margin-top 0.1rem;
    background: white;
  }
  .status{
    height: 0.7rem;
    display flex;
    justify-content space-between;
    align-items center;
  }
  .status-item{
    flex: 1;
    text-align center;
    .iconfont{
      font-size 0.2rem;
      color: #d4a163;
    }
  }
  .links{
    margin-top 0.1rem;
    background white;
  }
  .link-item{
    display flex;
    justify-content space-between;
    align-items center;
    height: 0.45rem;
    padding: 0 0.1rem;
    font-size: 0.14rem;
    color: #666;
  }
  .link-item:not(:last-child){
    border-bottom 1px solid #E9E9E9;
  }
  .icon-jinru{
    color: #ccc;
    font-size 0.12rem;
  }
  .item-title{
    line-height 1;
    font-size 0.12rem;
    color: #666;
    margin-top 0.05rem;
  }
</style>
