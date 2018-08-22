<template>
    <section class="msite-view">
        <header-top :title="address.name">
            <router-link slot="search" to="/search/" class="header-search">
                <i class="iconfont icon-sousou"></i>
            </router-link>
            <router-link slot="login" class="header-login" to="/login">
                <span class="header-login-text">登陆|注册</span>
            </router-link>
        </header-top>
        <nav>
            <div class="swiper-container" v-if="categorysArr.length>0">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(cs,index) in categorysArr" :key="index">
                        <a href="" class="link-to-food" v-for="(c,index2) in cs" :key="index2">
                            <div class="food-container">
                                <img :src="imgBaseUrl+c.image_url" alt="">
                            </div>
                            <span>{{c.title}}</span>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!--<img src="../assets/msite_back.svg" alt="">-->
        </nav>
        <div class="msite-shop-list">
            <div class="shop-header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop-header-title">附近商家</span>
            </div>
            <shop-list></shop-list>
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '@/components/HeaderTop'
import ShopList from '@/components/ShopList'
export default {
    name: 'msite-view',
    data(){
        return {
            imgBaseUrl : 'https://fuss10.elemecdn.com'
        }
    },
    mounted() {
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
    },
    components: {
        HeaderTop,
        ShopList
    },
    computed: {
        ...mapState(['address', 'categorys','userInfo']),
        categorysArr() {
            const { categorys } = this
            // 准备空的二维数组
            const arr = [];
            // 准备一个小数组(最大长度为8)
            let minArr = [];

            categorys.forEach(c=>{
                if(minArr.length === 8){
                    minArr = []
                };

                // 如果minArr是空的，将小数组保存到达数组中
                if(minArr.length === 0){
                    arr.push(minArr);
                }

                // 将当前分类保存到小数组中
                minArr.push(c);
            })
            /*categorys.forEach(function(c, index) {
                if (smallArr.length === 0) {
                    arr.push(smallArr);
                }
                smallArr.push(c);
                if (smallArr.length === max) {
                    smallArr = [];
                }
            });*/

            return arr;
        },
    },
    watch: {
        categorys(value) {
            this.$nextTick(() => {
                new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true
                })
            })
        }
    }
}
</script>
<style lang="stylus">
    .msite-view
        width 100%
        padding-top 45px
        .swiper-container
            padding-bottom 38px
            .swiper-slide
                display flex
                flex-wrap wrap
                a
                    width 25%
                    text-align center
                    color #666
                    .food-container
                        display block
                        width 100%
                        padding-bottom 10px
                        font-size 0
                        img
                            display inline-block
                            width 50px
                            height 50px
                    span
                        display block
                        width 100%
                        font-size 13px
            .swiper-pagination
                bottom 9px
                >span.swiper-pagination-bullet-active
                    background #02a774
        .msite-shop-list
            margin-top 10px
            background #fff
            .shop-header
                padding 10px 10px 0 10px
                text-align left
                .shop-icon
                    margin-left 15px
                    color #999
                .shop-header-title
                    color #999
                    font-size 14px
                    line-height 20px
            .msite-shop-list
                top-boorder-1px(#e4e4e4)
                margin-top 10px
                background #fff
                .shop-header
                    color #999
                    padding 10px 10px 0
                    .shop-icon
                        margin-left 5px
                    .shop-header-title
                        font-size 14px
                        line-height 20px

</style>
