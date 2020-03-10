import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Form0 from '../views/form/form0.vue'
import Directive from '../views/vDirective/baseDirective.vue'
import DataVisual from '../views/dataVisual/echartsDemo.vue';
import DataVisual02 from '../views/dataVisual/echartsDemo02.vue';
import DVFather from '../views/dataVisual/echartsDemoFather03.vue';
import DVBarGraph from '../views/dataVisual/echartsDemoBarGraph03.vue';
import DVPieGraph from '../views/dataVisual/echartsDemoPieGraph03.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/form',
    name: 'form',
    component: Form0
  },{
    path: '/directive',
    name: 'directive',
    component: Directive
  },
  {
    path: '/datavisual',
    name: 'datavisual',
    component: DataVisual
  }, {
    path: '/datavisual02',
    name: 'datavisual02',
    component: DataVisual02
  },  {
    path: '/father',
    name: 'father',
    component: DVFather,
    children:[
      {
        path:'/bargraph',
        name:'bargraph',
        component: DVBarGraph
      },{
        path:'/piegraph',
        name: 'piegraph',
        component: DVPieGraph
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
