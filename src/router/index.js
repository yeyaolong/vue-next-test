import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
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

{
  path: '/prop',
  name: 'prop',
  component: () => import(/* webpackChunkName: "test" */ '../views/prop.vue')
},
{
  path: '/setup',
  name: 'setup',
  component: () => import(/* webpackChunkName: "test" */ '../views/setup.vue')
},
{
  path: '/lifecircle',
  name: 'lifecircle',
  component: () => import(/* webpackChunkName: "test" */ '../views/lifecircle.vue')
},
{
  path: '/reactive',
  name: 'reactive',
  component: () => import(/* webpackChunkName: "test" */ '../views/reactive.vue')
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
