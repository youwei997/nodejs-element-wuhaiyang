<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
import { isEmpty } from '@/utils/util'
export default {
  created() {
    //解析token
    if (sessionStorage.token) {
      const decodedToken = jwt_decode(sessionStorage.token)

      //token 存vuex中
      this.$store.dispatch('setAuthenticated', !isEmpty(decodedToken))
      this.$store.dispatch('setUser', decodedToken)
    }
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}
div {
  box-sizing: border-box;
}
</style>
