// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import 'common/stylus/index.styl';
import stores from './stores.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(iView);
Vue.config.productionTip = false;

const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
};
const i18n = new VueI18n({
  locale: 'zh',  // set locale
  messages  // set locale messages
});

// 引入mockjs
require('./mock.js');
const store = new Vuex.Store(stores);
let routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/goods', component: goods}, {path: '/ratings', component: ratings}, {path: '/seller', component: seller}]}
];
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes: routes
});
let app = new Vue({
  store,
  router,
  i18n
}).$mount('#app');
router.push('/goods');
Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
});
export default app;
