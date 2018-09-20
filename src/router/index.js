/*
* 本页面是vue路由控制跳转页面判断
*/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/index', // 登录
      component: resolve => require(['../components/page/index'], resolve)
    },
    {
      path: '/login', // 登录
      component: resolve => require(['../components/page/login'], resolve)
    },
    {
      path: '/home', // 首页
      component: resolve => require(['../components/page/home'], resolve)
    },
    {
      path: '/error', // 错误页面
      component: resolve => require(['../components/common/error'], resolve)
    },
    {
      path: '/img', // 测试缩放图片组件
      component: resolve => require(['../components/common/templateImg'], resolve)
    }
  ]
})

// router钩子函数
router.beforeEach((to, from, next) => {
  next()
})

export default router
