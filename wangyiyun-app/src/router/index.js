import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeMy.vue'
import About from '../views/AboutMy.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'HomeMy', component: Home },
  { path: '/about', name: 'AboutMy', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router