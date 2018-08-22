<template>
  <section>
      <section class="goods">
        <div class="menu-wrapper">
          <ul>
            <li class="menu-item" v-for="(good,index) in goods" :key="index" :class="{current : index === currentIndex}" @click="clickMenuItem(index)">
              <span class="text bottom-border-1px">
                <img class="icon" v-if="good.icon" :src="good.icon" alt="">
                {{good.name}}
              </span>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper">
          <ul ref="foodsWrapperUl">
            <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
              <h1 class="title">{{good.name}}</h1>
              <ul>
                <li class="food-item bottom-bottom-1px" v-for="(food,index) in good.foods" :key="index">
                  <div class="icon">
                    <img  :src="food.icon" alt="" width="57" height="57">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                    <div class="extra">
                      <span class="count">月售{{food.sellCount}}份</span>
                      <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                      <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <CartControl :food="food" />
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ShopCart />
      </section>
      <Food  :food="food" ref="food" />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import CartControl from '@/components/CartControl'
import ShopCart from '@/components/ShopCart'
import Food from '@/components/Food'
export default {
  name : 'shop-good',
  data(){
    return{
      scrollY : 0,
      tops : [],
      food : {}
    }
  },
  mounted(){
    this.$store.dispatch('getShopGoods',()=>{
      this.$nextTick(()=>{
        this._initScroll()
        this._initTops()
      })
    })
  },
  methods : {
    _initScroll(){
      // 左侧分类列表的BScroll
      new BScroll('.menu-wrapper',{
        click:true
      })

      // 右侧food列表的BScroll
      this.foodsScroll = new BScroll('.foods-wrapper',{
        probeType : 2,
        click : true
      })

      // 监视滑动过程
      this.foodsScroll.on('scroll',(pos)=>{
        console.log(pos.y)
        // 保存y
        this.scrollY = Math.abs(pos.y)
      })

      // 监视滑动结束
      this.foodsScroll.on('scrollEnd',(pos)=>{
        console.log('滑动结束',pos.y)
        this.scrollY = Math.abs(pos.y)
      })
    },
    _initTops(){
      const tops = [];
      let top = 0;
      tops.push(top)

      // 得到ul下所有的子li

      const lis = this.$refs.foodsWrapperUl.getElementsByClassName('food-list-hook');
      Array.prototype.slice.call(lis).forEach((li)=>{
        top += li.clientHeight
        tops.push(top)

      })
      // 保存tops
      this.tops = tops;
    },
    clickMenuItem(index){
      const scrollY = this.tops[index];
      this.scrollY = scrollY;
      this.foodsScroll.scrollTo(0,-scrollY,300)
    }
  },
  computed:{
    ...mapState(['goods']),
    currentIndex (){
      const {scrollY,tops} = this
      const index = tops.findIndex((top,index)=>{
        return scrollY >= top && scrollY < tops[index+1]
      });
      return index;
    }
  },
  components:{
    CartControl,
    ShopCart,
    Food
  }
}
</script>

<style lang='stylus'>
@import '../../common/mixins'
.goods
  display flex
  position absolute
  top 195px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      width 56px
      height 54px
      line-height 14px
      padding 0 12px
      &.current
        position relative
        z-index 10
        color $green
        font-weight 700
        margin-top -1px
        background #fff
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        font-size 12px
        bottom-border-1px(rgba(7,17,27,0.1))
  .foods-wrapper
    flex 1
    .title
      height 26px
      line-height 26px
      font-size 12px
      color rgb(147,153,159)
      padding-left 14px
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7,17,27,0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7,17,27)
          margin 2px 0 8px 0
        .desc,.extra
          font-size 10px
          line-height 10px
          color rgb(147,153,159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            font-size 14px
            color rgb(240,20,20)
            margin-right 8px
          .old
            font-size 10px
            color rgb(147,153,159)
            text-decoration line-through
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>
