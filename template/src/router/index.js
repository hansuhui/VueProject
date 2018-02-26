import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/components/Home/index'
import BasicGrid from '@/components/Page/BasicGrid'
import Gallery from '@/components/Page/Gallery'
import FullWidth from '@/components/Page/FullWidth'
import SidebarLeft from '@/components/Page/SidebarLeft'
import SidebarRight from '@/components/Page/SidebarRight'

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
      path: '/Page/BasicGrid',
      name: 'BasicGrid',
      props: true,
      component: BasicGrid
    },
    {
      path: '/Page/Gallery',
      name: 'Gallery',
      props: true,
      component: Gallery
    },
    {
      path: '/Page/FullWidth',
      name: 'FullWidth',
      props: true,
      component: FullWidth
    },
    {
      path: '/Page/SidebarLeft',
      name: 'SidebarLeft',
      props: true,
      component: SidebarLeft
    },
    {
      path: '/Page/SidebarRight',
      name: 'SidebarRight',
      props: true,
      component: SidebarRight
    }

  ]
})
