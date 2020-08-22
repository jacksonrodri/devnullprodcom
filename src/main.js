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
import Post        from './Post.vue'
import Posts       from './assets/posts'

import DexIntel    from './DexIntel.vue'
import BlkTracker  from './BlkTracker.vue'
import LedgerCity  from './LedgerCity.vue'

const posts =
  Posts.map(function(entry){
    return {
      path: entry.path,
      component: () => import(`./posts/${entry.path}.md`)
    }
  })

const routes = [
  { path: '/',       component: Landing },
  { path: '/about',  component: About   },

  { path: '/blog',   component: Blog    },
  { path: '/post',   component: Post,
                     children : posts   },

  { path: '/products/dex',     component: DexIntel   },
  { path: '/products/tracker', component: BlkTracker },
  { path: '/products/city',    component: LedgerCity },
]

const router = new VueRouter({
  mode : "history",
  routes : routes,

  scrollBehavior (to) {
    if(to.hash)
      return {selector: to.hash}
    return { x: 0, y: 0 }
  }
})

new Vue({
  router : router
}).$mount('#app')
