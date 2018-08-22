<template>
  <section class="order-view">
    <header-top title="订单"></header-top>
    <section class="order-no-login">
      <img src="../assets/images/person.png" alt="">
      <h3>登陆后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
export default{
  name: 'order-view',
  components : {
    HeaderTop
  }
}
</script>
<style lang="stylus">
.order-view
  .order-no-login
    width 60%
    text-align center
    padding-top 140px
    margin 0 auto
    >img
      display block
      width 100%
      height 30%
    >h3
      padding 10px 0
      font-size 17px
      color #6a6a6a
    >button
      display inline-block
      font-size 14px
      color #fff
      border 0
      border-radius 5px
      padding 10px 20px
      background-color #02a774
</style>
