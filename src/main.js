// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import App from './App'
// import homepage from './components/homepage/homepage.vue'
// import goods from './components/goods/goods.vue'
// import seller from './components/seller/seller.vue'
// import person from './components/personal/person.vue'
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
    component: function (resolve) {
      require(['./App.vue'], resolve)
    },
    children: [
      {
        path: '/homepage',
        component: function (resolve) {
          require(['./components/homepage/homepage.vue'], resolve)
        },
        mate: { keepAlive: true }
      },
      {
        path: '/goods',
        component: function (resolve) {
          require(['./components/goods/goods.vue'], resolve)
        }
      },
      {
        path: '/seller',
        component: function (resolve) {
          require(['./components/seller/seller.vue'], resolve)
        }
      },
      {
        path: '/person',
        component: function (resolve) {
          require(['./components/personal/person.vue'], resolve)
        },
        children: [
          {
            path: 'person/address',
            component: function (resolve) {
              require(['./components/personal/address/address.vue'], resolve)
            }
          },
          {
            path: 'person/detail',
            component: function (resolve) {
              require(['./components/personal/detail/detail.vue'], resolve)
            }
          }
        ]
      },
    ]
  }
]
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes,
  mode: 'history'
})
let app = new Vue({
  store,
  router,
  i18n
}).$mount('#app')
// router.push('/homepage')
export default app
