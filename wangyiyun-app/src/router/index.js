import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeMy.vue'
import About from '../views/AboutMy.vue'
import NotFound from '../views/NotFound.vue'
import ItemMusic from '@/views/ItemMusic.vue'

const routes = [
  { path: '/', name: 'HomeMy', component: Home },
  { path: '/about', name: 'AboutMy', component: About },
  { path: '/itemMusic', name: 'ItemMusic', component: ItemMusic },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router