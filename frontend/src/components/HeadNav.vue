<template>
    <div class="head-nav">
        <div class="logo-container">
            <img class="logo" src="@/assets/logo.png" alt />
            <span class="title">后台管理系统</span>
        </div>
        <div class="user">
            <div class="user-info">
                <!-- <img src="user.avatar" class="avatar" alt /> -->
                <!-- @error="() => true" -->
                <el-avatar :size="40" :src="user.avatar">
                    <img
                        class="avatar"
                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                    />
                </el-avatar>
                <span class="username">{{ user.username }}</span>
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="info">个人信息</el-dropdown-item>
                        <el-dropdown-item command="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    components: {},

    methods: {
        ...mapActions(['logout']),
        handleCommand(val) {
            switch (val) {
                case 'info':
                    this.showInfo();
                    break;
                case 'logout':
                    this.logout();
                    break;
            }

        },
        showInfo() {
        }
    }
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.head-nav {
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background: #324057;
    color: #fff;
    border: 1px solid #1f2d3d;
    display: flex;
    align-items: center;
    // .el-row {
    //     display: flex;
    //     justify-content: space-between;
    // }
    .user {
        flex: 1;
        display: flex;
        align-items: center;
        padding-right: 10px;
        .el-dropdown {
            display: flex;
            align-items: center;
            margin-left: 10px;
        }
        .user-info {
            display: flex;
            align-items: center;
            .el-avatar {
                min-width: 40px;
                max-width: 40px;
            }

            .username {
                margin-left: 10px;
            }
        }
    }
    .logo-container {
        display: flex;
        align-items: center;
        width: 100%;
        .logo {
            background-size: contain;
            width: 48px !important;
            height: 48px !important;
        }
        .title {
            font-size: 25px;
            font-weight: 500;
            margin-left: 10px;
        }
    }
}
</style>