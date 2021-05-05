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
import Product          from "./pages/Product.vue"

import Articles         from "./pages/article/Articles.vue"
import ArticleDetail    from "./pages/article/ArticleDetail.vue"

import Blog             from "./pages/Blog.vue"
import Post             from "./pages/Post.vue"
import Posts            from "./assets/posts"

import DexIntel         from "./pages/DexIntel.vue"
import BlkTracker       from "./pages/BlkTracker.vue"

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

  { path: "/our-product",               component: Product },

  { path: "/articles",            component: Articles },
  { path: "/article",             component: ArticleDetail,
                                  children: posts     },

  { path: "/blog",                component: Blog },
  { path: "/post",                component: Post,
                                  children : posts },

  { path: "/products/dex",        component: DexIntel },
  { path: "/products/tracker",    component: BlkTracker }
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
