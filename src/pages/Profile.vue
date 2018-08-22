<template>
  <section class="profile-view">
    <header-top title="我的"></header-top>
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile-img">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile-info-data ">
      <ul class="info-data-list">
        <li>
          <a href="javascript:;" class="info-data-link">
            <span class="info-data-top">
              <span style="color: #f90">0.00</span>元</span>
            <span class="info-data-bottom">我的余额</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="info-data-top">
              <span style="color:#ff5f3e">0</span>个</span>
            <span class="info-data-bottom">我的优惠</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="info-data-top">
              <span style="color:#6ac20b">0</span>分</span>
            <span class="info-data-bottom">我的积分</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="profile-my-order">
      <a href="javascript:;" class="my-order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my-order-div">
          <span>我的订单</span>
          <span class="my-order-icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!--积分商城-->
      <a href="javascript:;" class="my-order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my-order-div">
          <span>积分商城</span>
          <span class="my-order-icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
export default {
  name: 'profile-view',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus">
@import '../common/mixins'
.profile-view
  width 100%
  .profile-number
    margin-top 45.5px
    .profile-link
      position relative
      display flex
      color #fff
      background #02a774
      padding 20px 10px
      .profile-img
        width 42px
      .user-info
        text-align left
      .arrow
        position absolute
        top 50%
        right 10px
        width 10px
        height 10px
        border-top 1px solid #fff
        border-right 1px solid #fff
        transform rotate(45deg);
        margin-top -5px
  .profile-info-data
    bottom-border-1px(#f1f1f1)
    ul
      display flex
      justify-content center
      text-align center
      li
        flex 1
        text-align center
        &:nth-child(2)
          border-left 1px solid #f1f1f1
          border-right 1px solid #f1f1f1
        a
          display flex
          flex-direction column
          padding 10px 0
          color #333
          .info-data-top
            padding 10px 5px 5px
            span
              font-size 30px
              font-weight 700
  .profile-my-order
    margin-top 10px
    background #fff
    .my-order
      display flex
      align-items center
      padding-left 15px
      color #333
      span
        width 20px
        height 20px
        >.iconfont
          display inline-block
          margin-left -10px
          font-size 30px
        .icon-order-s
          color #02a774
        .icon-jifen
          color #ff5f3e
        .icon-vip
          color #f90
        .icon-fuwu
          color #02a774
      .my-order-div
        width 100%
        display flex
        justify-content space-between
        padding 18px 10px 18px 0
        border-bottom 1px solid #f1f1f1
        span
          display block
          width 100%
        .my-order-icon
          width 10px
          height 10px
          .icon-jiantou1
            color #bbb
            font-size 10px
</style>
