<template>
    <div class="shop-container">
        <ul class="shop-list" v-if="shops.length">
            <li class="shop-item" v-for="(shop,index) in shops" :key="index" @click="$router.push('/shop')">
                <a>
                    <div class="shop-left">
                        <img :src="baseImgUrl+shop.image_path" alt="">
                    </div>
                    <div class="shop-right">
                        <section class="shop-detail-header">
                            <h4 class="shop-title">{{shop.name}}</h4>
                            <ul class="shop-detail-ul">
                                <li class="supports" v-for="(support,index) in shop.supports" :key="index">{{support.icon_name}}</li>
                            </ul>
                        </section>
                        <section class="shop-rating-order">
                            <section class="shop-rating-order-left">
                                <star :size="24" :score="shop.rating"></star>
                                <div class="rating-section">
                                    {{shop.rating}}
                                </div>
                                <div class="order-section">
                                    月售{{shop.recent_order_num}}单
                                </div>
                            </section>
                            <section class="shop-rating-order-right">
                                <!--<span class="delivery-style deliver-left">硅谷专送</span>-->
                                <span class="delivery-style deliver-right">{{shop.delivery_mode.text}}</span>
                            </section>
                        </section>
                        <section class="shop-distance">
                            <p class="shop-delivery-msg">
                                <span>￥{{shop.float_minimun_order_amount}}起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约￥{{shop.float_delivery_fee}}</span>
                            </p>
                        </section>
                    </div>
                </a>
            </li>
        </ul>
        <ul v-else>
            <li v-for="item in 6">
                <img src="../assets/images/shop_back.svg" alt="back">
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Star from '@/components/Star'
export default {
    name: 'shop-list',
    data(){
        return {
            baseImgUrl: 'http://cangdu.org:8001/img/'
        }
    },
    computed:{
        ...mapState(['shops'])
    },
    components : {
        Star
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../common/mixins.styl'

.shop-container
    margin-bottom 50px
    .shop-list
        .shop-item
            border-bottom 1px solid #f1f1f1
            width 100%
            >a
                clearFix()
                display block
                width 100%
                box-sizing border-box
                padding 15px 8px
            .shop-left
                float left
                width 23%
                height 75px
                padding-right 10px
                box-sizing border-box
                .shop-img
                    display block
                    width 100%
                    height 100%
            .shop-right
                float right
                width 77%
                .shop-detail-header
                    width 100%
                    display flex
                    justify-content space-between
                    align-items center
                    .shop-title
                        ellipsis()
                        width 200px
                        color #333
                        font-size 16px
                        line-height 16px
                        font-weight 700
                        &::before
                            content "品牌"
                            display 'inline-block'
                            font-size 11px
                            line-height 11px
                            color #333
                            background-color #ffd936
                            padding 2px 2px
                            border-radius 2px
                            margin-right 5px
                    .shop-detail-ul
                        display flex
                        .supports
                            float left
                            font-size 10px
                            color #999
                            border 1px solid #f1f1f1
                            padding 0 2px
                            border-radius 2px
                            margin-left 5px
                .shop-rating-order
                    display flex
                    justify-content space-between
                    width 100%
                    margin-top 18px
                    margin-bottom 8px
                    .shop-rating-order-left
                        color #ff9a0d
                        display flex
                        align-items center
                        .rating-section
                            font-size 10px
                            color #ff6000
                            margin-left 4px
                        .order-section
                            font-size 10px
                            color #666
                            transform scale(.8)
                    .shop-rating-order-right
                        font-size 0
                        .delivery-style
                            transform-origin 35px 0
                            transform scale(.7)
                            display inline-block
                            font-size 12px
                            padding 1px
                            border-radius 2px
                        .delivery-left
                            color #fff
                            margin-right -10px
                            background-color #02a774
                            border 1px solid #02a774
                        .delivery-right
                            color #02a774
                            border 1px solid #02a774
                .shop-distance
                    clearFix()
                    width 100%
                    font-size 12px
                    .shop-delivery-msg
                        float left
                        transform-origin 0
                        transform scale(.9)
                        color #666
                    .segmentation
                        color #ccc

</style>

