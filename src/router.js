import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        title: 'Covid19 - Stats',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    }/*,
    {
      path: '/stats',
      name: '',
      component: ArticleContent,
      props: true
    }*/
  ]
})