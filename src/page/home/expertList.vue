<template>
<section>
    <TopHead
        bgcolor='#26afeb'
        :title='this.$route.query.type'
         ></TopHead>
    <div class="item">
        <div class="item-content" v-for=" i in 5 ">
            <div class="cont" v-for="(item,index) in dataArr" v-if="index==(i*2-2)||index==(i*2-1)" @click="go_newsdetail(item)">
                    <img :src="item.coverImgUrl"/>
                    <h4>{{item.title}}</h4>
            </div>
        </div>
        <div class="no-more">
            暂无更多加载
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
        methods:{
            go_newsdetail(item){
            let obj = {};
            obj.title = item.title;
            obj.imageUrl = item.coverImgUrl;
            obj.text = item.summary;
            let data = JSON.stringify(obj)
            window.location.href = "epipe://?&mark=newsdetail&title=" + item.title + "&_id=" + item.id+'TTTTTT&data='+data;
            }
        },
        mounted(){
            let value = this.$route.query.type;
            let that = this;
            this.axios.get(this.Service.resource + value).then(function(res){
                if(res.data.h.code==200){
                    that.dataArr = res.data.b;
                }
            })
        },
        components : {
            TopHead
        }
    }
</script>


<style lang="stylus" scoped>
    .item{
        margin-top:0.59rem;
        padding 0 0.15rem;
    }

    .item-content{
        display flex;
        margin-bottom:0.15rem;
        padding 0.15rem 0.1rem;
        background-color #fff;
        -webkit-box-shadow: 0 0 0.2rem rgba(38,175,235,0.1);    
        box-shadow 0 0 0.2rem rgba(38,175,235,0.1);
        border-radius  4px;

        .cont{
            flex 1;
        }
        
        .cont:nth-child(2){
            padding-left 0.08rem;
        }

        img{
            display block;
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
    .no-more{
        text-align center;
        color #666;
        heigh 0.2rem;
        line-height 0.2rem;
    }

</style>
