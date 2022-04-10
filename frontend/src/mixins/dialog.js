/* 有问题后面再封装 */
export default {
    data() {
        return {
            dialogStatus: false,
            operationType: '', //add是新增 edit是编辑 view是查看
        }
    },
    mounted() {
    },
    methods: {
        dialogShow(type, index, row) {
            console.log(index, row);
            this.dialogStatus = true
            switch (type) {
                case 'add':
                    console.log('添加');
                    break;
                case 'edit':
                    console.log('编辑');
                    break;
                case 'view':
                    console.log('查看');
            }
        },
        dialogClose() {
            this.dialogStatus = false
        },
        // handleEdit(index, row) {
        //     console.log(index, row);
        //     this.operationType = 'edit'
        // },
        // handleDelete(index, row) {
        //     console.log(index, row);
        // },
    }
}
