<template>
    <el-card class="box-card">
        <el-form class="search-form" :model="searchForm" label-width="70px">
            <el-form-item label="时间筛选">
                <!-- format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"-->
                <el-date-picker
                    v-model="searchForm.searchDate"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                ></el-date-picker>
            </el-form-item>
            <el-form-item class="search-btn">
                <el-button type="primary" size="small" @click="search">查询</el-button>
            </el-form-item>
            <el-form-item v-if="user.identity === '0'">
                <el-button type="primary" size="small" @click="handleAdd">添加</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column label="收支类型" prop="type" align="center"></el-table-column>
            <el-table-column label="收支描述" prop="describe" align="center"></el-table-column>
            <el-table-column prop="income" label="收入" align="center">
                <template slot-scope="scope">
                    <span style="color:#00d053">+ {{ scope.row.income }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="expend" label="支出" align="center">
                <template slot-scope="scope">
                    <span style="color:#f56767">- {{ scope.row.expend }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="cash" label="账户现金" align="center">
                <template slot-scope="scope">
                    <span style="color:#4db3ff">{{ scope.row.cash }}</span>
                </template>
            </el-table-column>
            <el-table-column label="备注" prop="remark" align="center"></el-table-column>
            <el-table-column label="时间" width="250" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" v-if="user.identity === '0'">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- @prev-click="prevClick"
        @next-click="nextClick"-->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="page.sizes"
            :page-size="page.size"
            :layout="page.layout"
            :total="page.total"
        ></el-pagination>
        <Dialog
            :dialogStatus="operationType"
            :form="dialogForm"
            @dialogClose="dialogClose"
            @dialogSubmit="dialogSubmit"
        ></Dialog>
    </el-card>
</template>

<script>
/* eslint-disable */
import Dialog from '@/components/Dialog.vue'
import { getProfileList, updateProfile, deleteProfile, addProfile, getProfile } from '@/api/profile'
// import dialogMixins from '@/mixins/dialog'
export default {
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    components: {
        Dialog
    },
    // mixins: [dialogMixins],
    data() {
        return {
            //搜索表单
            searchForm: {
                searchDate: [new Date(), new Date()]
            },
            //用于筛选时间的数据
            filterTableData: {},
            // dialogStatus: false,
            operationType: '', //add是新增 edit是编辑 view是查看 不为空时dialog响应
            page: {
                total: 0,//总页数
                current: 1,//位于哪页
                sizes: [5, 10, 20, 50],//每页显示多少条,用于选择
                size: 10,//一页显示多少条
                layout: "total, sizes, prev, pager, next, jumper",//分页功能
            },
            tableData: [],
            dialogForm: {
                type: '1',//类型
                describe: '2',//收支描述
                income: '3',//收入
                expend: '4',//支出
                cash: '5',//账号现金
                remark: '默认新增带数据测试',//备注
            },
            allTableData: [],//前端分页,先临时这么写,后面再改成后端分页
        }
    },
    created() {
        this.getProfileList()
    },
    methods: {
        search() {
            if (!this.searchForm.searchDate) {
                this.$message.warning('请选择时间')
                return
            }
            const sTime = this.searchForm.searchDate[0].getTime()
            const eTime = this.searchForm.searchDate[1].getTime()

            //从所有数据的this.filterTableData 筛选
            this.allTableData = this.filterTableData.filter(item => {
                const date = new Date(item.date)
                const time = date.getTime()
                return (time >= sTime && time <= eTime)
            })

            //重新调用分页数据
            this.setPages()
        },
        handleSizeChange(size) {
            this.page.current = 1
            this.page.size = size
            this.tableData = this.allTableData.filter((item, index) => {
                return index < size
            })
        },
        handleCurrentChange(current) {
            //当前页
            const index = this.page.size * (current - 1)
            //数据的总数
            const nums = this.page.size * current
            //容器
            const tables = []
            for (let i = index; i < nums; i++) {
                //循环,如果是点第三页,就从20开始,判断this.allTableData第20条开始是否有值,有值就push到this.tableData
                if (this.allTableData[i]) {
                    tables.push(this.allTableData[i])
                }
                this.tableData = tables
            }
        },
        //获取所有数据
        getProfileList() {
            getProfileList().then(res => {
                // this.tableData = res.data
                this.allTableData = res.data
                this.filterTableData = res.data
                this.setPages()
            })
        },
        //分页设置 先临时这么写,后面再改成后端分页
        setPages() {
            //分页属性设置
            this.page.total = this.allTableData.length
            this.page.current = 1
            this.page.size = 10
            //设置默认分页数据
            this.tableData = this.allTableData.filter((item, index) => {
                return index < this.page.size
            })
        },
        //关闭dialog
        dialogClose() {
            this.operationType = ''
            this.dialogForm = {}
        },
        //确认添加
        dialogSubmit(data) {
            if (this.operationType === 'add') {
                addProfile(data).then(res => {
                    this.$message.success('添加成功')
                    this.dialogClose()
                    this.getProfileList()
                })
            } else if (this.operationType === 'edit') {
                //偷懒,不把值重新赋给一个新对象,直接丢回去
                updateProfile(data).then(res => {
                    this.$message.success('添加成功')
                    this.dialogClose()
                    this.getProfileList()
                })
            }

        },
        handleAdd() {
            this.operationType = 'add'
        },
        handleEdit(index, row) {
            this.operationType = 'edit'
            getProfile(row._id).then(res => {
                this.dialogForm = res.data
            })
        },
        handleDelete(index, row) {
            deleteProfile(row._id).then(res => {
                this.getProfileList()
            })
        },
    }
}
</script>
<style scoped lang="scss">
.search-form {
    display: flex;
    justify-content: space-between;
    .search-btn {
        flex: 1;
    }
}
.el-pagination {
    text-align: right;
    margin-top: 20px;
}
</style>