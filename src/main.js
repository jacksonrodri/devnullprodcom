import Vue from "vue"

import("../public/common.css")
require("./mq")

///

import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

///

import VueRouter from "vue-router"
Vue.use(VueRouter)

import Landing          from "./pages/Landing.vue"
import About            from "./pages/About.vue"
import Products         from "./pages/Products.vue"

import Articles         from "./pages/Articles.vue"
import ArticleDetail    from "./pages/ArticleDetail.vue"
import Posts            from "./assets/posts"

const posts =
  Posts.map(function(entry){
    return {
      path: entry.path,
      component: () => import(`@/posts/${entry.path}.md`)
    }
  })

const routes = [
  { path: "/",                    component: Landing },
  { path: "/about",               component: About },

  { path: "/products",            component: Products },

  { path: "/articles",            component: Articles },
  { path: "/article",             component: ArticleDetail,
                                  children: posts     }
]

const router = new VueRouter({
  mode : "history",
  routes : routes,

  scrollBehavior (to, from, savedPosition) {
    if(to.hash)
      return {selector: to.hash}

    else if (savedPosition)
      return savedPosition

    return { x: 0, y: 0 }
  }
})

new Vue({
  router : router
}).$mount("#app")
