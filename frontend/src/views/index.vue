<template>
    <div>
        <HeadNav></HeadNav>
        <router-view></router-view>
    </div>
</template>

<script>
import HeadNav from '@/components/HeadNav.vue'
export default {
    components: {
        HeadNav
    },
    data() {
        return {
        }
    },

    methods: {}
}
</script>

<style scoped>
</style>