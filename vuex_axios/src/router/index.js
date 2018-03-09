import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/components/Home/index'
import Transition from '@/components/Page/Transition'
import List from '@/components/Page/List'
import Detail from '@/components/Page/Detail'
import Update from '@/components/Page/Update'
import Insert from '@/components/Page/Insert'

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
      path: '/Page/List',
      name: 'List',
      props: true,
      component: List
    },
    {
      path: '/Page/Detail',
      name: 'Detail',
      props: true,
      component: Detail
    },
    {
      path: '/Page/Update',
      name: 'Update',
      props: true,
      component: Update
    },
    {
      path: '/Page/Insert',
      name: 'Insert',
      props: true,
      component: Insert
    }
  ]
})
