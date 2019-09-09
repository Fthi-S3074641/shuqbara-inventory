import Vue from 'vue'
import Vrouter from 'vue-router'

import welcome from './../views/welcome'
import main from './../views/main'

import Register from './../components/Register'
import Read from './../components/Read'
import Report from './../components/Report'
import getcomment from './../components/getcomment'
import comments from './../components/comments'

Vue.use(Vrouter)

export default new Vrouter({
    routes: [
        {
            path: '/',
            name: '/welcome',
            component: welcome
        },
        {
            path: '/new',
            name: '/new',
            component: main,
            children: [
                {
                    path: '/register',
                    name: '/register',
                    component: Register
                },
                {
                    path: '/read',
                    name: '/read',
                    component: Read
                },
                {
                    path: '/report',
                    name: '/report',
                    component: Report
                },
                {
                    path: '/getcomment',
                    name: '/getcomment',
                    component: getcomment
                },
                {
                    path: '/comments',
                    name: '/comments',
                    component: comments,
                    props: true
                }
            ]
        }
    ]
})