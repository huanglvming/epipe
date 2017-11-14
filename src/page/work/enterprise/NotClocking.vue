<template>
  <div class="not-clocking">
    <div class="header">
      <div class="header-top">
        <div class="svg" @click="emitEvent(3)">
          <svg class="icon icon-back" aria-hidden="false">
            <use xlink:href="#icon-zuoyoujiantou"></use>
          </svg>
        </div>
        未打卡
      </div>
      <div class="header-content">
        <div class="date">10月31日  星期二</div>
      </div>
      <div class="myself list-item flex-box" v-if="myself">
        <div class="flex-box">
          <div class="list">7</div>
          <div class="user-info flex-box">
            <div class="avater"></div>
            <div class="info-container">
              <div class="name">Forward</div>
              <p class="department">产品部</p>
            </div>
          </div>
        </div>
        <div class="desc">
          <p>上午未打卡</p>
          <p>下午未打卡</p>
        </div>
      </div>
    </div>
    <div class="content-wrapper" :class="{'no-self': !myself}">
      <div class="list-container">
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
            <p>下午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>下午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
            <p>下午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>下午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
            <p>下午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
            <p>下午未打卡</p>
          </div>
        </div>
        <div class="list-item flex-box">
          <div class="flex-box">
            <div class="list">7</div>
            <div class="user-info flex-box">
              <div class="avater"></div>
              <div class="info-container">
                <div class="name">Forward</div>
                <p class="department">产品部</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>上午未打卡</p>
          </div>
        </div>
      </div>
      <div class="no-more-data">暂时没有更多数据了~</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "NotClocking",
    data(){
      return{
        myself: true,
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .not-clocking{
    padding-top: 1.81rem;
  }
  .header{
    position fixed;
    top: 0;
    left:0;
    width 100%;
    height: 1.81rem;
    color: white;
    background: #609EF7;
    border-bottom-left-radius 0.2rem;
    border-bottom-right-radius 0.2rem;
  }
  .header-top{
    width:100%;
    height: 0.44rem;
    text-align center;
    line-height:0.44rem;
    font-size: 0.185rem;
    letter-spacing: 0.012rem;
    .icon-back{
      font-size: 0.17rem;
      margin-left: -0.2rem;
      color: white;
    }
    .svg{
      position absolute;
      left 0;
      top 0;
      width 0.58rem;
      height 100%;
    }
  }
  .header-content{
    width: 100%;
    height: 1.37rem;
  }
  .date{
    height: 0.87rem;
    line-height 0.87rem;
    text-align center;
    font-size: 0.17rem;
  }
  .flex-box{
    display flex;
    justify-content space-between;
    align-items center;
  }
  .list-item{
    z-index 1;
    box-sizing border-box;
    position relative;
    height: 0.74rem;
    margin: 0 auto;
    font-size: 0.17rem;
    background white;
  }
  .myself{
    width: 3.44rem;
    padding: 0 0.15rem;
    margin-top -0.5rem;
    margin-bottom 0.15rem;
    border-radius 0.04rem;
    box-shadow 0 0 20px rgba(95,157,247,0.2);
  }
  .list{
    margin-right: 0.17rem;
    color: #666;
  }
  .avater{
    width: 0.47rem;
    height: 0.47rem;
    margin-right: 0.1rem;
    border-radius: 50%;
    border: 1px solid red;
  }
  .name{
    margin-bottom: 0.1rem;
    font-size: 0.17rem;
    line-height 1;
    color: #333;
  }
  .department{
    font-size: 0.16rem;
    line-height 1;
    color: #333;
  }
  .time{
    margin-right 0.1rem;
    font-size: 0.16rem;
    color: #666;
  }
  .support{
    width: 0.44rem;
    height: 0.23rem;
    line-height: 0.23rem;
    font-size: 0.14rem;
    text-align center;
    color: #8BA5CA;
    border-radius: 0.11rem;
    border: 1px solid #8BA5CA;
  }
  .support-active{
    color: #FF8800;
    border: 1px solid #FF8800;
  }
  .content-wrapper{
    z-index 9;
    position relative;
    overflow-y auto;
    max-height 4.3rem;
    margin-top: 0.5rem;
  }
  .no-self{
    max-height 5.3rem;
    margin-top: -0.5rem;
  }
  .list-container{
    box-sizing border-box;
    width: 3.44rem;
    margin: 0 auto;
    padding-left 0.15rem;
    background white;
    box-shadow 0 0 20px rgba(95,157,247,0.2);
    .list-item{
      padding-right 0.15rem;
    }
  }
  .list-container .list-item:not(:last-child){
    border-bottom: 1px solid #EBEBEB;
  }
  .no-more-data{
    padding 0.3rem 0;
    font-size 0.14rem;
    text-align center;
    color #999;
  }
  .desc{
    font-size: 0.16rem;
    color: #666;
    line-height 1;
  }
  .desc p:nth-child(2){
    margin-top 0.1rem;
  }
</style>
