// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import vuex from 'vuex'

import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Sku } from 'vant';




import common from './utils/utils.js'//公共方法引入
import ComUrls from '../config/ComUrls'//配置axios


// import VueScroller from 'vue-scroller'

Vue.config.productionTip = false


Vue.use(vuex);
Vue.use(VueAwesomeSwiper)

Vue.use(Vant);
Vue.use(Sku);


//配置公共方法
Vue.use(common)
Vue.prototype.common = common

//配置axios路径
// axios.defaults.baseURL = ComUrls.Ein
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios
/* eslint-disable no-new */



  

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
