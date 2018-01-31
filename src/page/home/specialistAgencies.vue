<template>
    <section>
        <div class="item">
            <div class="item-title">
                <h2>政府部门</h2>
                <router-link :to="{path:'/agenciesList',query:{type: '政府部门'}}" class="more" tag="div">
                    更多<svg style="width: 0.2rem;height: 0.14rem" class="icon" aria-hidden="false">
                        <use xlink:href="#icon-into"></use>
                     </svg>
                </router-link>
            </div>
            <div class="item-content">
                <div class="cont"  v-for="(item,index) in governmentArr" v-if="index<2">
                    <div class="img-show">
                       
                        <img :src="item.coverImgUrl"/>
                    </div>
                    <div class="item-text">
                        <h2>{{item.title}}</h2>
                        <article>
                           {{item.summary}}
                        </article>
                    </div>
                </div>
            </div>
            <div class="label">
                <a v-for="(item,index) in governmentArr" v-if="!(index<2)">{{item.title}}</a>
            </div>
        </div>

        <div class="item">
            <div class="item-title">
                <h2>科研机构</h2>
                <router-link class="more" :to="{path:'/agenciesList',query:{type: '科研机构'}}" tag="div">
                    更多<svg style="width: 0.2rem;height: 0.14rem" class="icon" aria-hidden="false">
                        <use xlink:href="#icon-into"></use>
                     </svg>
                </router-link>
            </div>
            <div class="item-content">
                <div class="cont" v-for="(item,index) in cientificArr" v-if="index<2">
                    <div class="img-show">
                        <img :src="item.coverImgUrl"/>
                    </div>
                    <div class="item-text">
                        <h2>{{item.title}}</h2>
                        <article>
                            {{item.summary}}
                        </article>
                    </div>
                </div>
            </div>
            <div class="label">
                <a v-for="(item,index) in cientificArr" v-if="!(index<2)">{{item.title}}</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
        cientificArr : [],
        governmentArr : [],
     }}, 
    methods :{


    },
    mounted(){
        let  that = this;
        this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes=政府部门',)
            .then(function(res){
                  if(res.data.h.code == 200){
                    that.governmentArr = res.data.b;
                  }  
            })

            this.axios.get('http://3msapi.epipe.cn/api/resourceMain/getWaterfallPagedListByProgramCode?programCodes=科研机构',)
            .then(function(res){
                  if(res.data.h.code == 200){               
                    that.cientificArr = res.data.b;
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
        padding-bottom 0.05rem;
        background-color #fff;
        -webkit-box-shadow: 0 0 0.2rem rgba(252,83,91,0.1);    
        box-shadow 0 0 0.2rem rgba(252,83,91,0.1);
        border-radius  4px;
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

    .item-title{
            height 0.29rem;

            h2{
                float left;
                width 49%;
                border-left 2px solid #fc535b;
                text-indent 0.08rem;
                font-size: 0.14rem;
                line-height 1em;
                color #333;
                font-weight bolder;
            }

        .more{
                float right;
                width:20%;
                font-size 0.14rem;
                color #999;
                text-align right;
            }
        }

        
    .cont{
        display flex;
        margin-bottom 0.15rem;
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

    .label{
        overflow hidden;
        margin-right -0.15rem;

        a{
            float left;
            height 0.24rem;
            font-size 0.13rem;
            color #333;
            line-height 0.24rem;
            padding 0 0.15rem;
            border-radius 0.12rem;
            margin-right 0.15rem;
            margin-bottom 0.1rem;
            background-color #e6e6e6;
        }
    }

</style>
