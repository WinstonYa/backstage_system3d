<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-title">监利市产业园三维平台后台管理系统</div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login-form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单数据绑定对象
      loginForm: {
        username: "",
        password: ""
      },
      //表单验证规则对象
      loginFormRules: {
        //验证用户名
        username: [
          {
            required: true,
            message: "请输入登录名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        //验证密码
        password: [
          {
            required: true,
            message: "请输入登录密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    //点击重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  background: #345298;
  height: 100%;
  .login-box {
    width: 550px;
    height: 360px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    .login-title {
      position: absolute;
      width: 550px;
      height: 50px;
      line-height: 50px;
      font-size: 34px;
      font-weight: 600;
      color: #fff;
      text-align: center;
      top: -80px;
      left: 0;
    }
  }

  .login-form {
    margin-top: 100px;
    padding: 0 30px;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
