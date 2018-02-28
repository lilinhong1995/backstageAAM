// 下面的代码表示引入在npm的vue，并设置名字为Vue
import Vue from 'vue'

import App from './component/App.vue';

import vueRouter from './router'; //会在文件夹自动导入

import 'normalize.css';

import ElementUI from 'element-ui';
//element的css文件，而css文件中有两个字体图标要设置下
import 'element-ui/lib/theme-chalk/index.css';
//因为elementUI为组件，导入后要调用才会生效
Vue.use(ElementUI);

import axios from 'axios';

import api,{domain} from './js/api.js';


// 配置默认域名, 这样请求的时候就不用在url里加域名了
axios.defaults.baseURL = domain;
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
axios.defaults.withCredentials = true;
//为了使用方便，把axios和api添加到原型上
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
// 实例全局的Vue对象
console.log(Vue.prototype);

//设置HTML和body的高
import './less/index.less';

new Vue({
    el: "#app",
    render: createElement => createElement(App),
    router: vueRouter
})