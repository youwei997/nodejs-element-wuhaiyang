
<template>
    <div class="register">
        <el-container>
            <el-header height="40px">后台管理系统</el-header>
            <el-main>
                <el-form
                    :model="registerForm"
                    status-icon
                    :rules="rules"
                    ref="registerForm"
                    class="register-form"
                    label-width="100px"
                >
                    <el-form-item label="用户名：" prop="username">
                        <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱：" prop="email">
                        <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input
                            type="password"
                            v-model="registerForm.password"
                            placeholder="请输入密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="password2">
                        <el-input
                            type="password"
                            v-model="registerForm.password2"
                            placeholder="请再次输入密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="请选择身份：">
                        <el-select v-model="registerForm.identity" placeholder="请选择">
                            <el-option key="0" label="管理员" value="0"></el-option>
                            <el-option key="1" label="员工" value="1"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-button class="submit-btn" type="primary" @click="submit('registerForm')">注册</el-button>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { register } from '@/api/user'
export default {
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.registerForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            registerForm: {
                username: 'username',
                email: '1@email.com',
                password: '123456',
                password2: '123456',
                identity: '',
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur',
                    },
                    {
                        min: 2,
                        max: 30,
                        message: '长度要在2到30字符中间',
                        trigger: 'blur',
                    }
                ],
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
                password2: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur',
                    },
                    {
                        min: 6,
                        max: 30,
                        message: '长度在6到30之间'
                    },
                    {
                        validator: validatePass2,
                        trigger: 'blur',
                    }
                ]
            }
        };
    },
    methods: {
        submit(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                }
                register(this.registerForm).then(res => {
                    this.$message.success(res.msg)
                    this.$router.push('/login')
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
.register {
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
    height: 500px;

    .el-main {
        background-color: #fff;
        border-radius: 5px;
        padding-top: 40px;
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