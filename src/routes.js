const customers = () => import('./views/customers.vue');
const products = () => import('./views/products.vue');
const orders = () => import('./views/orders.vue');
const reports = () => import('./views/reports.vue');

export const routes = [
    {
        name: 'customers',
        path: '/customers',
        component: customers
    },
    {
        name: 'products',
        path: '/products',
        component: products
    },
    {
        name: 'orders',
        path: '/orders',
        component: orders
    },
    {
        name: 'reports',
        path: '/reports',
        component: reports
    }
];