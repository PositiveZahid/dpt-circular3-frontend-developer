import { createRouter, createWebHashHistory } from 'vue-router'

// layouts
import Default from '../layouts/Default.vue'
import Error from '../layouts/Error.vue'

// views
import Home from '../views/Home.vue'
import MasterPrice from '../views/MasterPrice.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        component: Home,
        meta: {
          title: 'Home',
          breadcumbs: ['Home']
        }
      },
      {
        path: '/master-price',
        component: MasterPrice,
        meta: {
          title: 'Master Price',
          breadcumbs: ['Master Price']
        }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: Default,
    children: [{ path: '', component: Error404 }],
    meta: {
      title: 'Page not found | 404',
      breadcumbs: ['404 | Page not found']
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to, from, next) => {
  document.title = `${to.meta.title || 'Popular Travels'}`
})

export default router
