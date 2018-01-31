<template>
  <section class="main">
      <div class="item" v-for="value in arrs">
          <h2>{{value.title}}</h2>
          <div class="item_infor">
              <span class='item_tag'>TAG</span>
              <span>{{value.createDate|time}}</span>
              <span class="spanRight">
                  <svg style="width: 0.2rem;height: 0.14rem" class="icon" aria-hidden="false">
                    <use xlink:href="#icon-yuedu"></use>
                 </svg>{{value.clicks}}
              </span>
          </div>
      </div>

  </section>
</template>


<script>
export default {
    data(){
        return{
            arrs:[],
        }
    },
    mounted(){
        let that = this;
        this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes=价格行情',)
        .then(function(res){
                if(res.data.h.code == 200){               
                that.arrs = res.data.b;
            }  
        })
    },
     filters : {
            time : function(value){
                let date = new Date(value)
                let year = date.getFullYear();
                let mon = date.getMonth()+'';
                let days = date.getDate()+'';
                mon =  mon.length<2? '0'+mon : mon 

                days =  days.length<2? '0'+days : days
                
                return year+'-'+mon+'-'+days;

            }
        }
}
</script>

<style lang="stylus" scoped>

    .item{
        margin  0.15rem;
        margin-bottom 0;
        padding 0.15rem 0.1rem;
        background-color: #fff;
        border-radius 4px;
        -webkit-box-shadow: 0 0 0.2rem rgba(255,136,0,.1);    
        box-shadow 0 0 0.2rem rgba(255,136,0,.1);
    }

    .item_infor{
        font-size 0.13rem;
        color #999;
    }

    .item_tag{
        color #ffa51e;
        margin-right 0.2rem;
    }
    .spanRight{
        float right ;
    }

    h2{
        height 0.48rem;
        font-size 0.15rem;
        color #333;
        line-height 0.24rem;
    }

</style>
