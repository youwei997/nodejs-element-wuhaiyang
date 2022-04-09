import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const types = {
//   SET_AUTHENTICATED: 'SET_AUTHENTICATED',
//   SET_USER: "SET_USER"
// }

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {}
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
  },
  mutations: {
    // [types.SET_AUTHENTICATED](state, isAuthenticated) {
    //   if (isAuthenticated) {
    //     state.isAuthenticated = true
    //   } else {
    //     state.isAuthenticated = false
    //   }
    // },
    // [types.SET_USER](state, user) {
    //   if (user) {
    //     state.user = user
    //   } else {
    //     state.user = {}
    //   }
    // }

    //用解析token 判断对象是否为空，不为空就是已授权（登录）
    SET_AUTHENTICATED(state, isAuthenticated) {
      if (isAuthenticated) {
        state.isAuthenticated = true
      } else {
        state.isAuthenticated = false
      }
    },
    //解析token获取的用户数据，存入
    SET_USER(state, user) {
      if (user) {
        state.user = user
      } else {
        state.user = {}
      }
    }
  },
  actions: {
    setAuthenticated({ commit }, isAuthenticated) {
      commit('SET_AUTHENTICATED', isAuthenticated)
    },
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
  },
  modules: {
  }
})
