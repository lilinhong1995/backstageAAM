<template class= "view">
  <div class="login_view">
    <section>
      <el-form :model="ruleForm2" status-icon :rules="rules2" label-position="left" ref="ruleForm2" label-width="50px" class="demo-ruleForm">
        <el-form-item label="账号" prop="uname">
          <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    // rule可以拿到校验信息和规制，val可以拿到校验的值，回调是成功或失败时启动
    var validatePass = (rule, value, callback) => {
      // 打印看看这三个值是什么
      // console.log(rule, value, callback);
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      // 打印看看这三个值是什么
      // console.log(rule, value, callback);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        uname: "admin",
        upwd: "123456"
      },
      // 这里的校验规则，柯多个
      rules2: {
        upwd: [{ validator: validatePass2, trigger: "blur" }],
        uname: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      //post的第二个参数是发送的数据，这里直接把表单对象传过去
      this.$http.post(this.$api.login, this.ruleForm2).then((res) => {
        if(res.data.status == 0) {
          this.$alert(res.data.message,"成功提示",{
            callback: () => {
              //cookit保存
              localStorage.setItem("uname",res.data.message.uname)
              //路由有个push方法可以跳转页面
              this.$router.push({name:"admin"})
            }
          })
        }else {
          this.$alert(res.data.message)
        }
      });
    },
    //点击登录时进行的操作
    submitForm(formName) {
      // refs用来获取页面的元素和组件，再调用validate验证
      //给valedate传回调，进行验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          console.log("账号密码不正确!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang= "less">
.login_view {
  height: 100%;
  background-color: aqua;
  position: relative;
  section {
    form {
      margin-top: 3em;
    }
    width: 300px;
    height: 250px;
    border: 2px solid #fff;
    border-radius: 10px;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-top: -150px;
    margin-left: -150px;
    overflow: hidden;
    padding: 10px;
  }
}
</style>