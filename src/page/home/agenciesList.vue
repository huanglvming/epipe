<template>
    <section>
        <TopHead
        bgcolor='#fc435b'
        :title='this.$route.query.type'
         ></TopHead>
        <div class="item-content">
                <div class="cont"  v-for="item in dataArr">
                    <div class="img-show">
                       
                        <img :src="item.coverImgUrl"/>
                    </div>
                    <div class="item-text">
                        <h2 v-html="item.title"></h2>
                        <article v-html="item.summary">
                        </article>
                    </div>
                </div>
        </div>

    </section>
</template>

<script>
import TopHead  from '../../components/topheader.vue'  //header导航栏
export default {
        data(){
            return{
              dataArr : [],
        }},
        mounted(){
        let  that = this;
        let value = this.$route.query.type;
        this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes='+value)
            .then(function(res){
                  if(res.data.h.code == 200){
                    that.dataArr = res.data.b;
                    console.log(that.dataArr)
                  }  
            })
        },
        components : {
            TopHead
        }
}
</script>


<style lang="stylus" scoped>

    .item-content{
        margin 0.15rem;
        margin-top 0.59rem;
    }

    .cont{
        display flex;
        padding 0.15rem;
        margin-bottom 0.15rem;
        background-color #fff;
        -webkit-box-shadow: 0 0 0.2rem rgba(252,83,91,0.1);    
        box-shadow 0 0 0.2rem rgba(252,83,91,0.1);   
        border-radius  4px;
    }

    .item-text{
        width 2.25rem;

         h2{
            font-size 0.15rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        article {
            font-size 0.14rem;
            line-height 0.18rem;
            color #666;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            margin 0.09rem 0;
            text-align justify;
        }
    }
    .img-show{
        width 0.9rem;
        height 0.9rem;
        margin-right 0.1rem;

        img{
            width 100%;
            height 100%;
            border-radius 4px;
        }
    }

</style>
