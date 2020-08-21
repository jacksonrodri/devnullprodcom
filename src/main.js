import Vue from 'vue'

import("../public/common.css")
require('./mq')

///

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

///

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Landing     from './Landing.vue'
import About       from './About.vue'
import Blog        from './Blog.vue'

import DexIntel    from './DexIntel.vue'
import BlkTracker  from './BlkTracker.vue'
import LedgerCity  from './LedgerCity.vue'

const routes = [
  { path: '/',            component: Landing     },
  { path: '/about',       component: About       },
  { path: '/blog',        component: Blog        },

  { path: '/products/dex',     component: DexIntel    },
  { path: '/products/tracker', component: BlkTracker  },
  { path: '/products/city',    component: LedgerCity  },
]

const router = new VueRouter({
  mode : "history",
  routes : routes
})

new Vue({
  router : router
}).$mount('#app')
