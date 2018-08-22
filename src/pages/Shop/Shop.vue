<template>
    <section class="shop-view">
        <shop-header></shop-header>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/shop/goods" replace="">点餐</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/shop/rating" replace="">评价</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/shop/info" replace="">商家</router-link>
            </div>
        </div>
        <router-view/>
    </section>
</template>
<script>
import ShopHeader from '@/components/ShopHeader'
export default {
    name: 'shop-view',
    components: {
        ShopHeader
    },
    mounted(){
        this.$store.dispatch('getShopInfo')
    }
}
</script>
<style lang="stylus">
@import '../../common/mixins'
.shop-view
    .tab
        display flex
        height 40px
        line-height 40px
        background #fff
        justify-content center
        text-align center
        bottom-border-1px(#f2f2f2)
        .tab-item
            flex 1
            font-size 14px
            color rgb(77,85,93)
            a
                display block
                position relative
                color #333
                &.router-link-active
                    color #02a774
                    &::after
                        content ''
                        position absolute
                        left 50%
                        bottom 1px
                        width 35px
                        height 2px
                        transform translateX(-50%)
                        background #02a774
</style>

