<template>
    <div class="index">
        <HeadNav></HeadNav>
        <LeftNavMenu></LeftNavMenu>
        <router-view class="rightContainer"></router-view>
    </div>
</template>

<script>
import HeadNav from '@/components/HeadNav.vue'
import LeftNavMenu from '@/components/LeftNavMenu.vue'
export default {
    components: {
        HeadNav,
        LeftNavMenu
    },
    data() {
        return {
        }
    },

    methods: {}
}
</script>

<style scoped>
.index {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.rightContainer {
    position: relative;
    top: 0;
    left: 180px;
    width: calc(100% - 180px);
    height: calc(100% - 60px);
    overflow: auto;
}
</style>