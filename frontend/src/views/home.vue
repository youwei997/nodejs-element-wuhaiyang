<template>
    <div class="home">
        <div class="frontend">
            <div class="title">前端</div>
            <ul>
                <li>
                    <div class="title">主要:</div>
                    <div>vue vuex vue-router</div>
                </li>
                <li>
                    <div class="title">模块:</div>
                    <div>ui库: ElementUI</div>
                    <div>请求库: axios</div>
                    <div>css: scss</div>
                    <div>语法校验: eslint</div>
                </li>
            </ul>
        </div>
        <div class="backend">
            <div class="title">后端</div>
            <ul>
                <li>
                    <div class="title">主要:</div>
                    <div>node express mongodb</div>
                </li>
                <li>
                    <div class="title">模块:</div>
                    <div>ODM: mongoose</div>
                    <div>随机生成头像: gravatar</div>
                    <div>token: jsonwebtoken</div>
                    <div>加密: bcrypt</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    components: {},

    methods: {}
}
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
    background-image: url("https://img1.baidu.com/it/u=2077813032,3277848709&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding-left: 20%;
}

.frontend,
.backend {
    margin-top: -60px;
    margin-right: 50px;
    div {
        font-size: 20px;
        color: white;
        margin-bottom: 10px;
    }
}

.title {
    font-size: 25px !important;
    font-weight: bold;
}
</style>