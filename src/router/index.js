import Vue from 'vue'
import Router from 'vue-router'
import MainIndex from '@/components/MainIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex 
    }
  ]
})
