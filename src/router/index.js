import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Welcome'
import About from '@/components/About'
import Blog from '@/components/Blog'
import EditArticle from '@/components/EditArticle'
import NewArticle from '@/components/NewArticle'
import ViewArticle from '@/components/ViewArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/new',
      name: 'new-article',
      component: NewArticle
    },
    {
      path: '/blog/edit/:article_id',
      name: 'edit-article',
      component: EditArticle
    },
    {
      path: '/blog/:article_id',
      name: 'view-article',
      component: ViewArticle
    }
  ]
})
