<template>
    <div class="info">
        <el-row>
            <el-col :span="8" class="avatar-col">
                <div class="avatar">
                    <img :src="user.avatar" />
                </div>
            </el-col>
            <el-col :span="16" class="user-col">
                <div class="user">
                    <div class="name">
                        <i class="el-icon-user-solid"></i>
                        <span>{{ user.username }}</span>
                    </div>
                    <div class="identity">
                        <i class="el-icon-s-tools"></i>
                        <span>{{ user.identity | identity }}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    filters: {
        identity(val) {
            //0为管理员,1为员工
            return val ? '员工' : '管理员'
        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
<style scoped lang="scss">
.info {
    height: 100%;
    width: 100%;
}
.avatar {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    overflow: hidden;
}

.el-row,
.el-col {
    height: 100%;
    display: flex;
    align-items: center;
}

.avatar-col {
    justify-content: center;
}
.user-col {
    background-color: rgb(218, 216, 216);
}

.user {
    margin-top: -30px;
    margin-left: 30px;
    font-size: 25px;
    > div {
        margin-bottom: 20px;
    }
    i {
        margin-top: 2px;
    }
    span {
        margin-left: 5px;
    }
}
</style>