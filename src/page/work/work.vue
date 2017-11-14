<style scoped lang="stylus">
  @import "../../style/variable.styl";
  *{
    -webkit-tap-highlight-color: transpranet;
  }
  .tab_work_con {
    margin-left: 0.135rem;
    margin-right: 0.135rem;
    margin-top: 0.15rem;
    background-color: #fff;
    border-radius: 0.027rem;
    box-shadow: 0 0 10px rgba(14,175,106,0.1);
  }
  .tab_work_2con {
    display: flex;
    flex-direction: row;
    height: 0.53rem;
    align-items: center;
  }
  .tab_work_2con li:first-child {
    width: 0.035rem;
    height: 0.16rem;
    background-color: $orange_color;
    border-radius: 1rem;
    margin-left: 0.12rem;
  }
  .tab_work_2con li:last-child {
    margin-left: 0.05rem;
    font-size: 0.16rem;
  }
  .tab_work_3con {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .tab_work_3con li{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom 0.2rem;
    padding-top 0.1rem;
    margin-top -0.15rem;
    -webkit-tap-highlight-color: transpranet;
  }
  .tab_work_3con li:nth-child(n + 5){
    margin-top 0;
  }
  .tab_work_3con li div:last-child
    font-size: 0.14rem
    margin-top 0.05rem

  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9;
  }
  .banner-wrapper{
    z-index: -1;
    height: 1.23rem;
    padding: 0 0.15rem;
    padding-top: 0.3rem;
    background: #499844;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    color: white;
    line-height:1;
  }
  .banner-h1{
    font-size: 0.19rem;
  }
  .banner-h2{
    font-size: 0.16rem;
    margin: 0.1rem 0 0.16rem;
  }
  .banner-h3{
    font-size: 0.13rem;
  }
  .broadcast{
    display: flex;
    padding: 0.15rem;
    margin-top: -0.3rem;
    box-shadow: 0 0 20px rgba(0,143,87,0.15);
  }
    .broadcast-content-wrapper{
      height: 0.42rem;
      overflow: hidden;

    }
  .icon-broadcast{
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.1rem;
  }
  .broadcast-title{
    font-size: 0.17rem;
    color: #333;
  }
  .broadcast-vice{
    font-size: 0.14rem;
    color: #666;
  }
</style>
<template>
  <div class="mask" v-if="mask"></div>
  <section class="padding_bottom_content" v-else>
    <div class="banner-wrapper">
      <!--<img style="min-height:1.36rem" @click="go_newsdetail(banner)" :src=banner.imgUrl class="banner_img">-->
      <div class="banner-h1">读书不觉已春深 一寸光阴一寸金</div>
      <div class="banner-h2">花会枯萎 爱永不凋零</div>
      <div class="banner-h3">2017-11-02 星期四</div>
    </div>
    <div class="content-wrapper">
      <div class="tab_work_con broadcast">
        <div>
          <svg class="icon icon-broadcast" aria-hidden="false">
            <use xlink:href="#icon-Msg"></use>
          </svg>
        </div>
        <div class="broadcast-content-wrapper">
          <div class="broadcast-content" ref="broadcast">
            <div class="broadcast-item" v-for="(item,index) in broadcast_list" :key="index">
              <div class="broadcast-title">{{item.title}}</div>
              <div class="broadcast-vice">{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab_work_con">
        <ul class="tab_work_2con">
          <li></li>
          <li>智能报表</li>
        </ul>
        <ul class="tab_work_3con">
          <li @click="go_record">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-qiyeribao"></use>
              </svg>
            </div>
            <div>企业日报</div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="tab_work_con">
        <ul class="tab_work_2con">
          <li></li>
          <li>企业管理</li>
        </ul>
        <ul class="tab_work_3con">
          <li @click="go_Maillist">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-tongxunlu"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">通讯录</div>
          </li>
          <li @click="go_Grouplist">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-qunzu"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">群组</div>
          </li>
          <li @click="go_record">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-kaoqin"></use>
              </svg>
            </div>
            <div>考勤</div>
          </li>
          <li @click="go_outwork">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-waiqin"></use>
              </svg>
            </div>
            <div>外勤</div>
          </li>
        </ul>
      </div>
      <div class="tab_work_con">
        <ul class="tab_work_2con">
          <li></li>
          <li>工作汇报</li>
        </ul>
        <ul class="tab_work_3con">
          <li @click="go_daynews">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-ribao"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">日报</div>
          </li>
          <li @click="go_weeknews">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-zhoubao"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">周报</div>
          </li>
          <li @click="go_monthnews">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-yuebao"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">月报</div>
          </li>
          <li @click="go_journal">
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-gongzuohuibao"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">工作汇报</div>
          </li>
        </ul>
      </div>
      <div class="tab_work_con">
        <ul class="tab_work_2con">
          <li></li>
          <li>移动制造</li>
        </ul>
        <ul class="tab_work_3con">
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-zonglan"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">总览</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-shengchanguanli"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">生产管理</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-wuliaoguanli"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">物料管理</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-shebeiguanli"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">设备管理</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-zhiliangguanli"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">质量管理</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-nengyuanguanli"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">能源管理</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-chejianjiankong"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">车间监控</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-nengyuanjiankong"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">能源监控</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-qushijiankong"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">趋势监控</div>
          </li>
          <li>
            <div>
              <svg style="width: 0.27rem;height: 0.27rem" class="icon" aria-hidden="false">
                <use xlink:href="#icon-shebeibaojing"></use>
              </svg>
            </div>
            <div style="font-size:0.14rem;margin-top: 0.05rem">设备报警</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        banner: '',
        loading: false,
        is_login: true,
        mask: false,
        broadcast_list: [{'title':'1','content':'关于智能制造，你不知道的事'},{'title':'2','content':'关于智能制造，你不知道的事'},{'title':'3','content':'关于智能制造，你不知道的事'}]
      }
    },
    created(){
      if (window.localStorage.work_banner) {
        this.banner = JSON.parse(window.localStorage.work_banner)
      }
    },
    components: {
    },
    methods: {
      go_record(){
        window.location.href = "epipe://?&mark=record"
        window["epipe_login_callback"] = auth_token => {
          window.localStorage.setItem("auth_token", auth_token);
        }
      },
      go_outwork(){
        window.location.href = "epipe://?&mark=outwork"
        window["epipe_login_callback"] = auth_token => {
          window.localStorage.setItem("auth_token", auth_token);
        }
      },
      go_Maillist(){
        window.location.href = "epipe://?&mark=Maillist"
      },
      go_daynews(){
        window["epipe_login_callback"] = auth_token => {
          window.localStorage.setItem("auth_token", auth_token);
        }
        window.location.href = "epipe://?&mark=daynews"
      },
      go_weeknews(){
        window["epipe_login_callback"] = auth_token => {
          window.localStorage.setItem("auth_token", auth_token);
        }
        window.location.href = "epipe://?&mark=weeknews"
      },
      go_monthnews(){
        window["epipe_login_callback"] = auth_token => {
          window.localStorage.setItem("auth_token", auth_token);
        }
        window.location.href = "epipe://?&mark=monthnews"
      },
      go_journal(){
        window["epipe_login_callback"] = auth_token => {
          window.localStorage.setItem("auth_token", auth_token);
        }
        window.location.href = "epipe://?&mark=journal"
      },
      go_newsdetail(item){
        if (item.url != "#") {
          let title = Util.Title_format(item.title)
          window.location.href = "epipe://?&mark=newsdetail&title=" + title + "&url=" + item.url;
        }
      },
      //跳转群组
      go_Grouplist(item){
        window.location.href = "epipe://?&mark=Grouplist"
      },
      //判断用户是否有组织
      organization(){
        let vm = this;
        this.axios.get(this.Service.organization).then(res =>{
          console.log("用户组织",res);
          if(res.data.h.code ==200){
            if(res.data.b.companyId){
              if(res.data.b.auditStatus == 0){
                this.$router.push({path:'/pending'});
              }else{
                this.mask = false;
              }
            }else if(res.data.b.auditStatus == 0){  //待审核状态
              this.$router.push({path:'/pending'});
            }else{  //没有组织，跳转到申请加入组织页面
              this.$router.push({path:'/Nologin'});
            }
          }else{
            this.$router.push({path:'/Nologin'});
          }
        }).catch(err =>{
          this.$toast(err.data.h.msg);
        });
      },
      /*获取banner图片*/
      getBanner(){
        let that = this;
        this.axios.get(this.Service.content_show, {params: {type: 3, locationId: 30}}).then(function (data) { //欢迎图
          if (data.data.b) {
            data.data.b[0].imgUrl = data.data.b[0].imgUrl + "?imageslim&imageView2/1/w/750/h/320"
            that.banner = data.data.b[0]
            window.localStorage.work_banner = JSON.stringify(data.data.b[0])
          }
        });
      },
      /*广播信息轮播*/
      broadcast(){
        let parentNode = this.$refs.broadcast;
        let timer = null;
        setInterval(() =>{
          parentNode.style.transition="-webkit-transform 1s ease-out";
          parentNode.style.transition="transform 1s ease-out";
          parentNode.style.WebkitTransform = "translateY(-0.41rem)";
          parentNode.style.transform = "translateY(-0.41rem)";
          clearTimeout(timer);
          timer = setTimeout(() =>{
            let childNode = parentNode.removeChild(parentNode.firstChild);
            parentNode.appendChild(childNode);
            parentNode.style.transition="-webkit-transform 0s ease-out";
            parentNode.style.transition="transform 0s ease-out";
            parentNode.style.WebkitTransform = "translateY(0)";
            parentNode.style.transform = "translateY(0)";
          },1000);
        },3000);
      },

    },
    mounted(){
//      this.getBanner();
//      this.organization();
      this.broadcast();
    }
  }
</script>


