import Vue from 'vue'
import {createRouter, createWebHistory, RouteRecordRaw as RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

//const router = new VueRouter({
const router = createRouter({  
  //mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
