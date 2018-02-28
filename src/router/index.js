import Vue from 'vue'
import VueRouter from 'vue-router'//这个是基于vue的插件

//是插件就得有use来启动
Vue.use(VueRouter)


import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import Shopcart from '../component/admin/shopcart/shopcart.vue'

//购物车路由配置
const shopcart = [
    { name: 'shopcart', path: 'shopcart', component: Shopcart}
]
//到处路由实例
export default new VueRouter({
    routes: [
        //登录
        { name: 'login', path: '/login', component: Login },
        //后台管理
        { name: 'admin', path: '/admin', component: Admin ,children : [ ...shopcart]}
    ]
})