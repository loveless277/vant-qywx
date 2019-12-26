const routes = [{
        path: '/home',
        name: 'home',
        redirect: '/home/create',
        // component: () =>import ('../views/home/create.vue'),
        component: resolve => (require(["../views/Home.vue"], resolve)),
        children: [{
                path: 'create',
                name: 'create',
                component: resolve => (require(["../views/home/create.vue"], resolve))
            },
            {
                path: 'audit',
                name: 'audit',
                component: resolve => (require(["../views/home/audit.vue"], resolve))
            },
            {
                path: 'charge',
                name: 'charge',
                component: resolve => (require(["../views/home/charge.vue"], resolve))
            },
            {
                path: 'dispose',
                name: 'dispose',
                component: resolve => (require(["../views/home/dispose.vue"], resolve))
            },
            {
                path: 'copyTo',
                name: 'copyTo',
                component: resolve => (require(["../views/home/copyTo.vue"], resolve))
            }
        ]
    },
    {
        path: '/home/createdOrder',
        name: 'createdOrder',
        component: resolve => (require(["../views/home/createdOrder.vue"], resolve))
    },
    {
        path: '/home/auditDetail',
        name: 'auditDetail',
        component: resolve => (require(["../views/home/auditDetail.vue"], resolve))
    },
    {
        path: '/home/chargeDetail',
        name: 'chargeDetail',
        component: resolve => (require(["../views/home/chargeDetail.vue"], resolve))
    },
    {
        path: '/home/disposeDetail',
        name: 'disposeDetail',
        component: resolve => (require(["../views/home/disposeDetail.vue"], resolve))
    },
    {
        path: '/home/copyToDetail',
        name: 'copyToDetail',
        component: resolve => (require(["../views/home/copyToDetail.vue"], resolve))
    },
]

// const router = new VueRouter({
//     scrollBehavior(to, from, savedPosition) {
//         if (savedPosition) {
//             return savedPosition
//         } else {
//             return { x: 0, y: 0 }
//         }
//     },
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })

export default routes