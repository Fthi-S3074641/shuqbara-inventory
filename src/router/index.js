import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/welcome',
        component: ()  => import(/* webpackChunkName: "welcome" */ '@/views/welcome.vue')
    },
    {
        path: '/register',
        name: '/register',
        component: ()  => import(/* webpackChunkName: "register" */ '@/views/register.vue')
    },
    {
        path: '/read',
        name: '/read',
        component: ()  => import(/* webpackChunkName: "read" */ '@/views/read.vue'),
        props: true
    },
    {
        path: '/report',
        name: '/report',
        component: ()  => import(/* webpackChunkName: "report" */ '@/views/report.vue'),
        props: true
    },
    {
        path: '/comments',
        name: '/comments',
        component: ()  => import(/* webpackChunkName: "comments" */ '@/views/comments.vue'),
        props: true
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router