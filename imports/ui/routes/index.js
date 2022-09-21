import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../pages/Home.vue'),

    },
    {
        path: '/User',
        component: () => import('../pages/User.vue'),
        name: 'User'
    },
    {
        path: '/Customer',
        component: () => import('../pages/Customer.vue'),
        name: 'Customer'
    },
    {
        path: '/Item',
        component: () => import('../pages/Item.vue'),
        name: 'Item'
    },
    {
        path: '/Category',
        component: () => import('../pages/Category.vue'),
        name: 'Category'
    },
    {
        path: '/Supplier',
        component: () => import('../pages/Supplier.vue'),
        name: 'Supplier'
    },
    {
        path: '/Purchase',
        component: () => import('../pages/Purchase.vue'),
        name: 'Purchase'
    },
    {
        path: '/Sale',
        component: () => import('../pages/Sale.vue'),
    },
    {
        path: '/Import',
        component: () => import('../pages/Import.vue'),
        name: "Import"
    },
    {
        path: '/Export',
        component: () => import('../pages/Export.vue'),
        name: "Export"
    },
    {
        path: '/Login',
        component: () => import('../pages/Login.vue'),

    },
    {
        path: '/test',
        component: () => import('../pages/test.vue'),

    },
]

const router = new VueRouter({
    routes
})

export default router