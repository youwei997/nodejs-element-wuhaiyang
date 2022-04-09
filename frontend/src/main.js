import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//第三方
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//自定义
import http from '@/utils/http';
Vue.prototype.$http = http

//重置样式css
import '@/style/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
