import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import lista from '../views/lista.vue'
import registra from '../views/registra.vue'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/lista",
      name: 'lista',
      component: lista,
    },
    {
      path: "/registra",
      name: 'registra',
      component: registra,

    },
    {
      path: "/login",
      name: 'login',
      component: login,

    }
 
  ],
})

export default router
