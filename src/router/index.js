import Vue from 'vue'
import Vrouter from 'vue-router'

// import welcome from './../views/welcome'
// import register from './../views/register'
// import read from './../views/read'
// import report from './../views/report'
// import comments from './../views/comments'

Vue.use(Vrouter)

export default new Vrouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
      },
    routes: [
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
    ],
    mode: 'history'
})