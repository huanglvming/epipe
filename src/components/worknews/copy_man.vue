<style scoped lang="stylus">
  @import "../../style/variable.styl";
  /*
 抄送人
 */
  .day_chose_ul2
    display flex
    flex-direction column
    margin 0.15rem 0.15rem 0 0.15rem
    background-color #fff
    border-radius 0.03rem
    padding 0.1rem 0.15rem 0.15rem 0.15rem
    .day_chose_ul3
      width 100%
      display flex
      height 0.77rem
      flex-direction row
      overflow hidden
      flex-wrap wrap
      margin-top 0.02rem
      .day_chose_ul3_li
        &:active
          opacity $opacity_common
      p
        text-align center
        position relative
        left 0.13rem
        height 0.08rem
      li
        width 20%
        padding-top 0.12rem
        text-align center
        div
          overflow hidden
          font-size 0.13rem
          margin-top 0.03rem
        img
          width 0.33rem
          height 0.33rem
          border-radius 0.33rem
    .day_chose_ul4
      font-size 0.15rem
      color $font_color_3
      display flex
      align-items center
      .day_div_two
        font-size 0.15rem
        color $blue_color
        font-weight normal
        padding 0.05rem 0.12rem 0.05rem 0.12rem
        &:active
          opacity $opacity_common
      .day_div_one
        font-weight bold
        flex 1
        span
          font-size 0.13rem
          color $font_color_6
          font-weight normal
</style>
<template>
  <section>
    <ul class="day_chose_ul2">
      <li class="day_chose_ul4">
        <div class="day_div_one">抄送人 <span v-if="has_journal">（已添加{{data_list.length}}人）</span></div>
        <div v-if="more_prople"  @click="open_people" class="day_div_two">点击收缩</div>
        <div v-if="!more_prople&data_list.length>4"  @click="open_people" class="day_div_two">
          查看全部
        </div>
      </li>
      <ul class="day_chose_ul3">
        <li @click="remove_man(item,index)" v-for="(item,index) in data_list">
          <p>
            <svg v-if="has_journal" style="font-size: 0.15rem" class="icon" aria-hidden="false">
              <use xlink:href="#icon-shanchu"></use>
            </svg>
          </p>
          <img v-if="item.profileImg.length<=1" src="/static/img/tou.81b395f.png"/>
          <img :src=item.profileImg|man_photo_format v-if="item.profileImg.length>1"/>
          <div v-html="item.name"></div>
        </li>
        <li v-if="has_journal" class="day_chose_ul3_li" @click="go_imchoice">
          <svg style="font-size: 0.33rem;margin-top: 0.085rem" class="icon" aria-hidden="false">
            <use xlink:href="#icon-tianjiarenyuan"></use>
          </svg>
          <div style="margin-top: 0.055rem">添加</div>
        </li>
      </ul>
    </ul>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        more_prople: false
      }
    },
    props: [
      'color', 'data_list', 'has_journal'
    ],
    methods: {
      open_people: function () {
        console.log(this.work_value)
        if (this.more_prople == false) {
          document.getElementsByClassName("day_chose_ul3")[0].style.height = "auto"
        } else {
          document.getElementsByClassName("day_chose_ul3")[0].style.height = "0.77rem"
        }
        this.more_prople = !this.more_prople
        console.log(this.more_prople)
      },
      go_imchoice: function () {
//        window.location.href = "epipe://?&mark=imchoice"
        this.$router.push({path: 'imchoice', query: {bgcolor:this.color}})
      },
      remove_man: function (item, index) {
        if (this.has_journal) {
          this.$emit("remove_item", item, index)
        }
      }
    },
    mounted(){
    },
    activated(){
      if (this.data_list > 4) {
        this.more_prople = true
      } else {
        this.more_prople = false
      }
    }
  }
</script>
