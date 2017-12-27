
<template>
    <div>
        <div class="header" v-bind:style="{ background: bg_color}" >
        <div class="back" @click="goback()">
          <svg class="icon icon-back" aria-hidden="false">
            <use xlink:href="#icon-zuoyoujiantou"></use>
          </svg>
        </div>
        待办事宜
      </div>

    </div>
</template>

<script>
    export default{
        data(){
            return{




            }
        }
    }

</script>


<style scoped lang="stylus">
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.44rem;
        background: #fd545c;
        text-align: center;
        line-height: 0.44rem;
        color: #fff;
        font-size: 0.185rem;
        letter-spacing: 0.012rem;
        .back{
            position: absolute;
            left: 0;
            width: 0.5rem;
            text-align: left;
            .icon-back{
                font-size: 0.17rem;
                margin-left: 0.1rem;
            }
        }
    }
</style>