// 1、按需引入方法
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import { createRouter, createWebHashHistory } from "vue-router"
import Index from '../views/IndexView.vue';


Vue.use(Router)  //Vue全局使用Router

// 2、定义一些路由
const routes = [
    {
        path: '/',
        redirection: '/UserLogin'
    },
    {
        path: '/UserLogin',
        name: 'UserLogin',
        component:() => import('../components/UserLogin.vue')
    },
    {
        path: '/Index',
        name: 'Index',
        component: Index,
    },
]
//3、创建路由实例
const router = createRouter({
    routes,
    history:createWebHashHistory("./")
})

export default router