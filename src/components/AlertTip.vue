<template>
  <div class="alert-tip">
    <section class="tip-text-container">
        <div class="tip-icon">
            <span></span>
            <span></span>
        </div>
        <p class="tip-text">{{alertText}}</p>
        <div class="confirm" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
    name : 'alert-tip',
    props : {
        alertText : String
    },
    methods :{
        closeTip(){
            this.$emit('closeTip')
        }
    }
}
</script>

<style lang='stylus'>
.alert-tip
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 200
    background rgba(0,0,0,.5)
    .tip-text-container
        position absolute
        top 50%
        left 50%
        margin-top : -90px
        margin-left -110px
        width 60%
        animation : tipMove .4s
        background-color #fff
        border 1px
        padding-top 20px
        display flex
        justify-content center
        align-items center
        flex-direction column
        border-radius 5px
        .tip-icon
            width 55px
            height 55px
            border 2px solid #f8cb86
            border-radius 50%
            font-size 20px
            display flex
            justify-content center
            align-items center
            flex-direction column
            span
                width 2px
                background-color #f8cb86
                &:nth-of-type(1)
                    height 30px
                &:nth-of-type(2)
                    height 2px
                    border 1px
                    border-radius 50%
                    margin-top 2px
        .tip-text
            font-size 14px
            color #333
            line-height 20px
            text-align center
            margin-top 10px
            padding 0 5px
        .confirm
            width 100%
            font-size 18px
            font-weight bold
            color #02a774
            text-align center
            line-height 35px
            border 1px
            border-bottom-left-radius 5px
            border-bottom-right-radius 5px
            margin-top 10px
</style>
