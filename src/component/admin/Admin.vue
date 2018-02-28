<template>
  <div>
    <!-- 调用组件：组件的调用就跟HTML标签一样 -->
    <app-header></app-header>
    <app-aside></app-aside>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入相关页面
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  // 创建组件
  components: {
    appHeader:Header ,
    appAside:Aside
  }
}
// 注册全局的用 Vue.component('')
</script>
