import Vue from 'vue'
import VueRouter from 'vue-router'//这个是基于vue的路由插件

//是插件就得有use来启动
Vue.use(VueRouter)


import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'

// 商品管理相关子页面引入
import Goodslist from '../component/admin/goods/list/list.vue'
import Goodscomment from '../component/admin/goods/comment/comment.vue'
import Goodsdetail from '../component/admin/goods/detail/detail.vue'

// 订单管理相关子页面引入
import Orderaaaa from '../component/admin/order/aaaa/aaaa.vue'
import Orderbbbb from '../component/admin/order/bbbb/bbbb.vue'
import Ordercccc from '../component/admin/order/cccc/cccc.vue'

//admin的子路由 => 商品管理相关模块
const goods = [
    // 商品管理
    {name: 'goodslist',path: 'goods/list',component: Goodslist},
    { name: 'goodscomment', path: 'goods/comment', component: Goodscomment},
    { name: 'goodsdetail', path: 'goods/detail/:id', component: Goodsdetail},
    // 订单管理
    { name: 'goodsaaaa', path: 'order/aaaa', component: Orderaaaa },
    { name: 'goodsbbbb', path: 'order/bbbb', component: Orderbbbb },
    { name: 'goodscccc', path: 'order/cccc', component: Ordercccc }
]

//到处路由实例
export default new VueRouter({
    routes: [
        //登录
        { name: 'login', path: '/login', component: Login },
        //后台管理
        { name: 'admin', path: '/admin', component: Admin, children: [...goods]}
    ]
})