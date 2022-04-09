
<template>
    <div class="login">
        <el-container>
            <el-header height="40px">后台管理系统</el-header>
            <el-main>
                <el-form
                    :model="loginForm"
                    status-icon
                    :rules="rules"
                    ref="loginForm"
                    label-width="100px"
                >
                    <el-form-item label="邮箱：" prop="email">
                        <el-input v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label-width="0">
                        <el-button class="submit-btn" type="primary" @click="submit('loginForm')">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <div>
                            还没有账号? 点击
                            <el-link :underline="false" type="primary" @click="goRegister">注册</el-link>
                        </div>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { login } from '@/api/user'
import { mapActions } from 'vuex';
import jwt_decode from 'jwt-decode'
import { isEmpty } from '@/utils/util'
export default {
    data() {
        return {
            loginForm: {
                email: '1@email.com',
                password: '123456',
            },
            rules: {
                email: [
                    {
                        type: 'email',
                        required: true,
                        message: '邮箱格式不正确',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur',
                    },
                    {
                        min: 6,
                        max: 30,
                        message: '长度在6到30之间'
                    }
                ],
            }
        };
    },
    methods: {
        ...mapActions(['setAuthenticated', 'setUser']),
        goRegister() {
            this.$router.push('/register')
        },
        submit(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                }
                login(this.loginForm).then(res => {
                    this.$message.success(res.msg)

                    //存储到session
                    sessionStorage.setItem('token', res.token)

                    //解析token
                    const decodedToken = jwt_decode(res.token)

                    //token 存vuex中
                    this.setAuthenticated(!isEmpty(decodedToken))
                    this.setUser(decodedToken)

                    this.$router.push('/index')
                }).catch(err => {
                    console.log(err);
                })
            })
        }
    },
    created() {
    }
}
</script>

<style scoped lang="scss">
.login {
    background-image: url("@/assets/register-bg.webp");
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-container {
    margin-top: -50px;
    flex: none;
    width: 400px;
    height: 350px;

    .el-main {
        background-color: #fff;
        border-radius: 5px;
        padding-top: 40px;
        padding-bottom: 0;
    }

    .el-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #fff;
        font-size: 30px;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .submit-btn,
    .el-select {
        width: 100%;
    }
}
</style>