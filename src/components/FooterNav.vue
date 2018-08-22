<template>
  <footer class="footer_nav">
      <router-link to="/msite" class="nav_item">
          <span class="item_icon">
              <i class="iconfont icon-waimai"></i>
          </span>
          <span>首页</span>
      </router-link>
      <router-link to="/search" class="nav_item">
          <span class="item_icon">
              <i class="iconfont icon-waimai"></i>
          </span>
          <span>搜索</span>
      </router-link>
      <router-link to="/order" class="nav_item">
          <span class="item_icon">
              <i class="iconfont icon-waimai"></i>
          </span>
          <span>订单</span>
      </router-link>
      <router-link to="/profile" class="nav_item">
          <span class="item_icon">
              <i class="iconfont icon-waimai"></i>
          </span>
          <span>我的</span>
      </router-link>
  </footer>
</template>
<script>
export default{
  name: 'footer-nav'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_nav
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #ffffff
        width 100%
        height 50px
        display flex
        .nav_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            color #999
            &.router-link-active
                color #02a774
            span
                font-size 14px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
</style>
