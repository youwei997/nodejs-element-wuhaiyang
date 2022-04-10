export default {
    data() {
        return {
            dialogStatus: false,
        }
    },
    mounted() {
    },
    methods: {
        dialogShow() {
            this.dialogStatus = true
        },
        dialogClose() {
            this.dialogStatus = false
        }
    }
}
