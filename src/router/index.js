import Vue from 'vue'
import Vrouter from 'vue-router'

import welcome from './../views/welcome'
import add from './../views/add'
import register from './../components/register'
import read from './../components/read'
import report from './../components/report'

Vue.use(Vrouter)

export default new Vrouter({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: welcome
        },
        {
            path: '/new',
            name: 'new',
            component: add,
            children: [
                {
                    path: '/register',
                    name: 'register',
                    component: register
                },
                {
                    path: '/read',
                    name: 'read',
                    component: read
                },
                {
                    path: '/report',
                    name: 'report',
                    component: report
                }
            ]
        }
    ]
})