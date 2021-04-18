// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import axios from 'axios'
// 公共方法
import common from '@/commonFunction/common.js' 
// mds加密文件
import md5 from '@/commonFunction/jquery.md5.min.js' 
// 引入全局样式
import './assets/common.css'
import './assets/core.css'

// 引入swiper轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

//转rem
import 'amfe-flexible' 
import './commonFunction/rem'

// 引入swiper
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.common = common
Vue.prototype.md5 = md5
Vue.use(VueAwesomeSwiper)
// Vue.prototype.HOST = '/api'
axios.defaults.baseURL = 'https://api-register.ujoygames.com'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
