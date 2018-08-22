<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav v-show="$route.meta.showFooter"></footer-nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FooterNav from '@/components/FooterNav'
export default {
  name: 'App',
  components: {
    FooterNav
  },
  mounted(){
    // this.$store.dispatch('getAddress');
    this.getAddress();
    this.getUserInfo();
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  }
}
</script>

<style lang="stylus">
@import 'assets/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
