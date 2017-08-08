import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'

import Home from '@/pages/Home'

import Hero from '@/components/Hero'

// https://github.com/ktquez/vue-head
Vue.use(VueHead, {
  separator: '|', // Default seperator
  complement: 'Reusable component store' // Default title postfix
})

// Using the router
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/components/Hero',
      component: Hero
    }
  ]
})
