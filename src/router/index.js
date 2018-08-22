import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite'
import Search from '@/pages/Search'
import Order from '@/pages/Order'
import Profile from '@/pages/Profile'
import Login from '@/pages/Login'

import Shop from '@/pages/Shop/Shop.vue'

import ShopGoods from '@/pages/Shop/ShopGoods'
import ShopRating  from '@/pages/Shop/ShopRating'
import ShopInfo from '@/pages/Shop/ShopInfo'

Vue.use(Router)

/*
import HelloWorld from '@/components/HelloWorld'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
*/

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta : {
        showFooter : true
      }
    },
    {
      path: '/search',
      component: Search,
      meta : {
        showFooter : true
      }
    },
    {
      path: '/order',
      component: Order,
      meta : {
        showFooter : true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta : {
        showFooter : true
      }
    },{
      path : '/login',
      component : Login
    },{
      path : '/shop',
      component : Shop,
      children : [
        {
          path : '/shop/goods',
          component : ShopGoods
        },{
          path : '/shop/rating',
          component : ShopRating
        },{
          path : '/shop/info',
          component : ShopInfo
        }
      ]
    }
  ]
})
