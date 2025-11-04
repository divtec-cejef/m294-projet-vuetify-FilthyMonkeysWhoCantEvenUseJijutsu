import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/About.vue'
import Details from '@/pages/Details.vue'
import Home from '@/pages/index.vue'
import Wishlist from '@/pages/Wishlist.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/details/:id', name: 'Details', component: Details },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist },
  { path: '/about', name: 'About', component: About },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
