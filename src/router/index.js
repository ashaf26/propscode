import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bootcamp from '../views/Bootcamp.vue'
import Sourscodepage from '../views/Sourscodepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bootcamp',
      name: 'bootcamp',
      component: Bootcamp,
    },
    {
      path: '/sourscode',
      name: 'sourscode',
      component: Sourscodepage,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' } // Scroll ke atas setiap navigasi halaman
  },
})

export default router
