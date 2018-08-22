<template>
  <section class="search-view">
    <header-top title="搜索"></header-top>
    <form class="search-form" action="">
      <input class="search-input" type="search" placeholder="请输入商家或美食名称">
      <button class="search-submit" type="submit">提交</button>
    </form>
  </section>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
export default{
  name: 'search-view',
  components : {
    HeaderTop
  }
}
</script>
<style lang="stylus">
@import '../common/mixins'

.search-view
  width 100%
  .search-form
    margin-top 45px
    background #fff
    padding 12px 8px
    display flex
    justify-content space-between
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      border 4px solid #f2f2f2
      &.search-input
        width 80%
        background #f2f2f2
    button
      width 16%
      height 35px
      color #fff
      background-color #02a77f
      border 4px solid #02a774
      outline none
</style>

