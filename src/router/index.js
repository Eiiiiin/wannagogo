import Vue from 'vue'
import Router from 'vue-router'
import special from '@/page/special'
import designer from '@/page/designer'
import shopping from '@/page/shopping'
import mine from '@/page/mine'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'special',
      component: special
    },{
      path: '/designer',
      name: 'designer',
      component: designer
    },{
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },{
      path: '/mine',
      name: 'mine',
      component: mine
    },
  ]
})
