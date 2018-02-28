<template>

    <div>
        {{vue}}
        <router-view></router-view>
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>欢迎使用 Element</p>
        </el-dialog>
        <div>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="primary" plain @click="show2 = !show2">Click Me</el-button>

            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-zoom-in-center">
                    <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
                </transition>

                <transition name="el-zoom-in-top">
                    <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
                </transition>

                <transition name="el-zoom-in-bottom">
                    <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
                </transition>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      vue: "vue脚手架测试",
      visible: false,
      show2: true
    };
  },
  created() {
      this.$http(this.$api.logout).then( console.log("咋咋")) //测试axios
  }
};
</script>


<style>

div {
  color: aqua;
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
