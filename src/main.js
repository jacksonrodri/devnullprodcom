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
import XrpIntel    from './XrpIntel.vue'
import ZerpTracker from './ZerpTracker.vue'
import About       from './About.vue'
import Blog        from './Blog.vue'

const routes = [
  { path: '/',            component: Landing     },
  { path: '/xrpintel',    component: XrpIntel    },
  { path: '/zerptracker', component: ZerpTracker },
  { path: '/about',       component: About       },
  { path: '/blog',        component: Blog        },
]

const router = new VueRouter({
  mode : "history",
  routes : routes
})

new Vue({
  router : router
}).$mount('#app')
