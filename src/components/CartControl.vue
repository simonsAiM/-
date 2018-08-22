<template>
  <div class="cart-control">
      <transition name="move">
        <div class="iconfont icon-remove_circle_outline" v-show="food.count" @click.stop="updateFoodCount(false)"></div>
      </transition>
        <div class="cart-count" v-show="food.count">{{food.count}}</div>
        <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
    props : {
        food : Object
    },
    methods : {
        updateFoodCount(isAdd){
            const { food } = this;
            this.$store.dispatch('updateFoodCount',{food,isAdd})
        }
    }
}
</script>

<style lang='stylus'>
@import  '../common/mixins'
.cart-control
    font-size 0
    .cart-decrease
        display inline-block
        font-size 24px
        color rgb(0,160,220)
        line-height 24px
        padding 6px
    .icon-remove_circle_outline
        display inline-block
        font-size 24px
        color $green
        line-height 24px
        padding 6px
    .cart-count
        display inline-block
        vertical-align top
        width 12px;
        font-size 10px
        color rgb(147,153,159)
        text-align center
        line-height 24px
        padding-top 6px
    .icon-add_circle
        display inline-block
        vertical-align top
        font-size 24px
        color $green
        line-height 24px
        padding 6px
</style>
