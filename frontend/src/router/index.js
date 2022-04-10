import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index'),
    children: [
      //path不加内容,进入到/index,默认展示home
      {
        path: '',
        component: () => import('@/views/home'),
      },
      //path加/home,进入到/home,也展示home
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
      }

    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/views/notfound')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem('token')
  if (to.path == '/register' || to.path == '/login') {
    next();
  } else {
    isLogin ? next() : next('/login');
  }
})

export default router
