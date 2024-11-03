const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/index',
        name: 'index',
        // 懒加载路由
        component: () => import('@/views/IndexView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
    },
    // {
    //     path: '/user',
    //     name: 'user',
    //     component: () => import('@/views/'),
    // }
]

export default routes
