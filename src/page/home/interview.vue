<template>
    <section>
        <div class="item" v-for="item in intervewArr">
            <div class="img-show">
                <img :src="item.coverImgUrl" />
            </div>
            <div class="item-content">
                <h2>{{item.title}}</h2>
                <div class="item-text">{{item.title}}</div>
                <div class="item_infor">
                    <span class='item_tag'>TAG</span>
                    <span>{{item.createDate|time}}</span>
                    <span class="spanRight">
                        <svg style="width: 0.2rem;height: 0.14rem" class="icon" aria-hidden="false">
                            <use xlink:href="#icon-yuedu"></use>
                        </svg>{{item.clicks}}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script >
export default {
        data(){
            return{
                intervewArr : [],
        }},
        mounted(){
            let that = this;
            this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes=专家访谈',)
            .then(function(res){
                  if(res.data.h.code == 200){               
                    that.intervewArr = res.data.b;
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
        display flex;
        margin 0.15rem;
        margin-bottom 0;
        padding 0.15rem 0.1rem;
        background-color #fff;
        border-radius 4px;
        -webkit-box-shadow: 0 0 0.2rem rgba(255,136,0,.1);    
        box-shadow 0 0 0.2rem rgba(255,136,0,.1);
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

    .item-content{
        width:2.25rem;

        h2{
            font-size 0.15rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .item-text{
            font-size 0.14rem;
            line-height 0.18rem;
            color #666;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin 0.09rem 0;
            text-align justify;
        }
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

</style>


