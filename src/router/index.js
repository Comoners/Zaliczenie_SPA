import { createRouter, createWebHistory } from 'vue-router'
import Pogoda from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
const routes = [
  {
    path: '/SprawdzPogode',
    name: 'Pogoda',
    component: Pogoda
  },

  {
path: '/Zaliczenie',
name: 'about',
component: About
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
