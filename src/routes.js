/**
 * Created by vincent on 2017/12/11.
 */

export default {
  routes: [
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
              path: 'address',
              component: function (resolve) {
                require(['./components/personal/address/address.vue'], resolve)
              }
            },
            {
              path: 'detail',
              component: function (resolve) {
                require(['./components/personal/detail/detail.vue'], resolve)
              }
            }
          ]
        },
      ]
    }
  ]
}
