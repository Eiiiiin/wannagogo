import Vue from 'vue'
import Router from 'vue-router'
import special from '@/page/special'
import designer from '@/page/designer'
import shopping from '@/page/shopping'
import mine from '@/page/mine'
import goodsdetails from '@/page/goodsdetails'
import login from '@/page/login'
import demo from '@/page/demo'
import router from '../router'

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
    {
      path:'/goodsdetails',
      name:'goodsdetails',
      component:goodsdetails
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/demo',
      name:'demo',
      component:demo
    }
  ]
})


// router.beforeEach((to,from,next) => {   
// let userInfo = localStorage.getItem('userInfo');
// // debugger;
// if(userInfo){
// alert('一登录')
//   next()
// }else{
//   alert('请登录')
//   next()
// }

//   })