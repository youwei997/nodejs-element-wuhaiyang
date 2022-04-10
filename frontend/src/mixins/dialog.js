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
            console.log(1);
            this.dialogStatus = true
        },
        dialogClose() {
            this.dialogStatus = false
        }
    }
}
