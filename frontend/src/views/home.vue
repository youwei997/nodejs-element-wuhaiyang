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
    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.linuxidc.com%2Fupload%2F2013_03%2F130325190475721.jpg&refer=http%3A%2F%2Fwww.linuxidc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652160755&t=7bffa2d95a5b4b3e71a8230b867f0e00");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding-left: 20%;
    background-position: -180px -212px;
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