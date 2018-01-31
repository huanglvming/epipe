<template>
    <section>
        <div class="item">
            <div class="item-title">
                <h2>著名专家</h2>
                <router-link class="more" :to="{path:'/expertList',query:{type: '著名专家'}}" tag="div">
                    更多<svg style="width: 0.2rem;height: 0.14rem" class="icon" aria-hidden="false">
                        <use xlink:href="#icon-into"></use>
                     </svg>
                </router-link>
            </div>
            <div class="item-content">
                <div class="cont" v-for="item in fameArr">
                        <img :src="item.coverImgUrl"/>                    
                    <h4>{{item.title}}</h4>
                    <!-- <p>{{item.title}}</p> -->
                </div>
            </div>
        </div>
        <div class="item">
            <div class="item-title">
                <h2>咨询专家</h2>
                <router-link class="more" tag="div" :to="{path:'/expertList',query:{type: '咨询专家'}}">
                    更多<svg style="width: 0.2rem;height: 0.14rem" class="icon" aria-hidden="false">
                        <use xlink:href="#icon-into"></use>
                     </svg>
                </router-link>
            </div>
            <div class="item-content">
                <div class="cont" v-for="item in consultArr">
                        <img :src="item.coverImgUrl"/>                    
                    <h4>{{item.title}}</h4>
                    <!-- <p>{{item.title}}</p> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            fameArr : [],
            consultArr : [],
        }        
    },
    mounted(){
        let that = this;

       this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes=著名专家').then(function(res){
          if(res.data.h.code==200){
              var arr = res.data.b;
              that.fameArr.push(arr[0])
              that.fameArr.push(arr[1])
          }
       })

       this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes=咨询专家').then(function(res){
          if(res.data.h.code==200){
              var arr = res.data.b;
              that.consultArr.push(arr[0])
              that.consultArr.push(arr[1])
          }
       })
    }
}
</script>

<style lang="stylus" scoped>

    .item{
        margin 0.15rem;
        margin-bottom 0;
        padding 0.15rem 0.1rem;
        background-color #fff;
        -webkit-box-shadow: 0 0 0.2rem rgba(38,175,235,0.1);    
        box-shadow 0 0 0.2rem rgba(38,175,235,0.1);
        border-radius  4px;
    }

    .item-title{
        height 0.29rem;

        h2{
            float left;
            width 49%;
            border-left 2px solid #26afeb;
            text-indent 0.08rem;
            font-size: 0.14rem;
            line-height 1em;
            color #333;
            font-weight bold;
        }

        p{
            font-size 0.14rem;
            color #999;
        }
    }
    .item-content{
        display flex;

        .cont{
            flex 1;
        }
        
        .cont:nth-child(2){
            padding-left 0.08rem;
        }

        img{
            display:block;
            width:1.575rem;
            height :1.575rem;
            border-radius 4px;
        }

        h4{
            font-size 0.15rem;
            width 1.575rem;
            color #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top 0.1rem;
        }
    }
    .more{
            float right;
            width:20%;
            text-align:right;
            font-size 0.14rem;
            color #999;
        }

</style>
