/*
* 添加插件 挂载到index.html
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '@/assets/css/common.css'
import axios from './utils/http.js'
import * as filters from './utils/Time.js' // import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$axios = axios
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
