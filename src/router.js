import Vue from 'vue'
import VueRouter from "vue-router"

import Index from '@/pages/Index.vue'
import Post from '@/pages/Post.vue'
import Page from '@/pages/Page.vue'
// import ErrorPage from '@/pages/Error.vue'
import Archive from '@/pages/Archive.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'home',
      path: '/',
      meta: {
        title: 'Our Blog',
      },
      component: Index,
    },
    {
      name: 'author',
      path: '/author/:name',
      meta: {
        title: 'Archive: Author',
      },
      component: Archive,
    },
    {
      name: 'tag',
      path: '/tag/:tag',
      meta: {
        title: 'Archive: Tag',
      },
      component: Archive,
    },
    {
      name: 'post',
      path: '/post/:id',
      meta: {
        title: 'Single Blog',
      },
      component: Post,
    },
    {
      name: 'page',
      path: '/page/:id',
      meta: {
        title: 'Page',
      },
      component: Page,
    },
    {
      path: '*',
      // meta: {
      //   title: 'Error!',
      // },
      // component: ErrorPage,
      redirect: '/',
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return !savedPosition ? { x: 0, y: 0 } : savedPosition
  }
})

router.afterEach(route => {
  document.title = route.meta.title
})

export default router
