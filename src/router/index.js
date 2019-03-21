import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navigation from '@/components/Navigation'
import ElementuiTree from '@/components/elementTree'
import displayFlex from '@/components/displayFlex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/elementuitree',
      name: 'elementuiTree',
      component: ElementuiTree
    },
    {
      path: '/displayFlex',
      name: 'displayFlex',
      component: displayFlex
    }
  ]
})
