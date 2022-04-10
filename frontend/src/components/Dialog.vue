
<template>
    <!-- @close="dialogClose" -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible" :before-close="dialogClose">
        <el-form :model="dialogForm" :rules="rules" label-width="80px">
            <el-form-item label="收支类型">
                <el-select v-model="dialogForm.type" placeholder="请选择">
                    <el-option v-for="item in typeList" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="describe" label="收支描述">
                <el-input v-model="dialogForm.describe" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="income" label="收入">
                <el-input v-model="dialogForm.income" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="expend" label="支出">
                <el-input v-model="dialogForm.expend" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="cash" label="账号现金">
                <el-input v-model="dialogForm.cash" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="remark" label="备注">
                <el-input v-model="dialogForm.remark" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogClose">取 消</el-button>
            <el-button type="primary" @click="dialogSubmit">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: ['dialogStatus', 'form'],
    watch: {
        //父级存入某个值,需要dialog响应显示时,显示
        dialogStatus(val) {
            this.dialogFormVisible = val ? true : false;
        },
        form(val) {
            this.dialogForm = val
        },
    },
    computed: {
        title() {
            let val = ''
            if (this.dialogStatus === 'add') {
                val = '添加'
            } else if (this.dialogStatus === 'edit') {
                val = '编辑'
            }
            return val
        }
    },
    data() {
        return {
            rules: {
                describe: [{ required: true, message: '收支描述不能为空', trigger: 'blur' }],
                income: [{ required: true, message: '收入不能为空', trigger: 'blur' }],
                expend: [{ required: true, message: '支出不能为空', trigger: 'blur' }],
                cash: [{ required: true, message: '账号现金不能为空', trigger: 'blur' }],
            },
            dialogFormVisible: false,
            dialogForm: {},
            // form: {
            //     type: '1',//类型
            //     describe: '2',//收支描述
            //     income: '3',//收入
            //     expend: '4',//支出
            //     cash: '5',//账号现金
            //     remark: '6',//备注
            // },
            typeList: ['提现', '提现手续费', '充值', '优惠券', '充值礼券', '转账', '红包'],
        }
    },
    created() {
        // this.dialogForm = this.form
    },
    components: {},

    methods: {
        dialogSubmit() {
            this.$emit('dialogSubmit', this.form);
        },
        dialogClose() {
            this.$emit('dialogClose');
        }
    }
}
</script>

<style scoped>
</style>