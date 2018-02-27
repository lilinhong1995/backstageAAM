// 下面的代码表示引入在npm的vue，并设置名字为Vue
import Vue from 'vue'
import App from './component/App.vue'
// 实例全局的Vue对象
new Vue({
    el: "#app",
    render: createElement => createElement(App)
})