import { createRouter, createWebHistory } from 'vue-router'
import Space from '@/components/Space.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Space',
    component: Space
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
