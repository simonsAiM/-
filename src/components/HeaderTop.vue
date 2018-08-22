<template>
  <header class="header">
      <slot name="search"></slot>
      <a href="" class="header-title">{{title}}</a>
      <slot name="login"></slot>
  </header>
</template>
<script>
export default{
  props: {
    title: String,
    default: ''
  }
}
</script>
<style lang="stylus">
    @import '../common/mixins'
    .header
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header-search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .icon-sousou
                font-size 25px
                color #fff
        .header-title
            ellipsis()
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            width 50%
            color #fff
            text-align center
            .header-title-text
                display block
                font-size 20px
                color #fff
        .header-login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            .header-login-text
                color #fff
</style>
