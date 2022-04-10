<template>
    <el-row class="menu_page">
        <el-col>
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#242a1c"
                text-color="#fff"
                active-text-color="#409eff"
            >
                <router-link to="/home">
                    <el-menu-item index="0">首页</el-menu-item>
                    <template v-for="item in items">
                        <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                            <template slot="title">
                                <span slot="title">{{ item.name }}</span>
                            </template>
                            <router-link
                                v-for="citem in item.children"
                                :to="citem.path"
                                :key="citem.path"
                            >
                                <el-menu-item :index="citem.path">
                                    <span slot="title">{{ citem.name }}</span>
                                </el-menu-item>
                            </router-link>
                        </el-submenu>
                    </template>
                </router-link>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'money',
                    name: '资金管理',
                    path: 'fund',
                    children: [{ path: 'fundlist', name: '资金流水' }]
                },
                {
                    icon: 'info',
                    name: '信息管理',
                    path: 'info',
                    children: [{ path: 'info', name: '个人信息' }]
                },
            ]
        }
    },

    components: {},

    methods: {
        methods: {
        }
    }
}
</script>

<style scoped>
.menu_page {
    position: fixed;
    top: 60px;
    left: 0;
    min-height: 100%;
    background-color: #242a1c;
    z-index: 99;
}

.el-menu {
    border: none;
}
.fa-margin {
    margin-right: 5px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}

.el-menu-vertical-demo {
    width: 35px;
}

.el-submenu .el-menu-item {
    min-width: 180px;
}

.hiddenDropdown,
.hiddenDropname {
    display: none;
}

a {
    text-decoration: none;
}
</style>