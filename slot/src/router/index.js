import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/components/Home/index'
import Transition from '@/components/Page/Transition'
import Transition2 from '@/components/Page/Transition2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      props: true,
      component: HomeIndex
    },
    {
      path: '/Page/Transition',
      name: 'Transition',
      props: true,
      component: Transition
    },
    {
      path: '/Page/Transition2',
      name: 'Transition2',
      props: true,
      component: Transition2
    }
  ]
})
