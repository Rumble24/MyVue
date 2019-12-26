import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home.vue'
import Member from '@/components/tabbar/Member.vue'
import Search from '@/components/tabbar/Search.vue'
import Shopcar from '@/components/tabbar/Shopcar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: Home, meta : {keepAlive: true }},
    { path: '/member', component: Member, meta : {keepAlive: true }},
    { path: '/search', component: Search , meta : {keepAlive: true }},
    { path: '/shopcar', component: Shopcar, meta : {keepAlive: true }},
  ]
})
