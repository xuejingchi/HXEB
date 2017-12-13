// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import stores from './stores.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import i18nMes from './i18nMes'
// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'zh',  // set locale
  messages: i18nMes.message  // set locale messages
})
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.el(key, value)
})
console.log(33345, process.env.NODE_ENV)
// 引入mockjs
require('./mock.js')
const store = new Vuex.Store(stores)
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes: routes.routes,
  mode: 'history'
})
let app = new Vue({
  store,
  router,
  i18n
}).$mount('#app')
// router.push('/homepage')
export default app
