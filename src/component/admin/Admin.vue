<template>
  <div class="admin">
    <el-container>
      <el-aside width="200px">
        <!-- 调用组件：组件的调用就跟HTML标签一样 -->
        <!-- 公共左侧 -->
        <app-Aside></app-Aside>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 公共头部 -->
          <app-Header></app-Header>
        </el-header>
        <!-- 变换主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// 引入相关页面
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  // 创建组件
  components: {
    appHeader: Header,
    appAside: Aside
  }
};
// 注册全局的用 Vue.component('')
</script>

<style scoped lang = 'less'>
.admin {
  height: 100%;
}
.el-header{
  line-height: 60px;
  background-color: #001731;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #001731;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  height: 100%;
  color: #333;
  background-color: rgb(8, 109, 186);
}

</style>
