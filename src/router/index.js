import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:'/', name:'/', component: Layout, children:[
      {path:'about-us', name:'about-us', component:AboutUs},
    ]},
  ]
})

export default router
