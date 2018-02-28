import Vue from 'vue'
import VueRouter from 'vue-router'//这个是基于vue的插件
import Login from '../component/login/Login.vue'
import Register from '../component/register/register.vue'

//是插件就得有use来启动
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: Login },
        {name:'register',path:'/register',component:Register}
    ]
})