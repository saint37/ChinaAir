import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import layout from '@/common/layout'
import index from '@/components/index'
import aboutUs from '@/components/aboutUs'
import Dynamic from '@/components/dynamic'
import Video from '@/components/video'
import Contact from '@/components/contact'
import Partner from '@/components/Partner'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/ChinaAir/',
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/index',
      name: 'layout',
      component: layout,
      children: [  //这里就是二级路由的配置
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/aboutUs',
          name: 'aboutUs',
          component: aboutUs
        },
        {
          path: '/Dynamic',
          name: 'Dynamic',
          component: Dynamic
        },
        {
          path: '/Video',
          name: 'Video',
          component: Video
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/Partner',
          name: 'Partner',
          component: Partner
        }
      ]
    },
  ]
})
