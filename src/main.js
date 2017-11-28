// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import homepage from './components/homepage/homepage.vue'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import person from './components/personal/person.vue'
import 'common/stylus/index.styl'
import stores from './stores.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

const messages = {
  en: Object.assign({ message: 'hello', goodDiscuss: 'good' }, enLocale),
  zh: Object.assign({ message: '你好', goodDiscuss: '好评' }, zhLocale)
}
const i18n = new VueI18n({
  locale: 'zh',  // set locale
  messages  // set locale messages
})
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.el(key, value)
})
// 引入mockjs
require('./mock.js')
const store = new Vuex.Store(stores)
let routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    children: [
      {path: '/homepage', component: homepage},
      {path: '/goods', component: goods},
      {path: '/seller', component: seller},
      {path: '/person', component: person}
    ]
  }
]
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes: routes
})
let app = new Vue({
  store,
  router,
  i18n
}).$mount('#app')
router.push('/homepage')
export default app
