import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/layout/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home,
    name: 'Home'
  }]
})

export default router
