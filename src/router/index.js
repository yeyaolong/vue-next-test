import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path: '/test',
  name: 'Test',
  component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
},
{
  path: '/testVuex',
  name: 'TestVuex',
  component: () => import(/* webpackChunkName: "test" */ '../views/TestVuex.vue')
},
{
  path: '/testRef',
  name: 'TestRef',
  component: () => import(/* webpackChunkName: "test" */ '../views/TestRef.vue')
},
{
  path: '/testRef2',
  name: 'TestRef2',
  component: () => import(/* webpackChunkName: "test" */ '../views/TestRef2.vue')
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
