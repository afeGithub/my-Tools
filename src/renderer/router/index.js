import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'login',
          component:require('@/components/Login').default
      },
      {
          path: '/homePage',
          name: 'homePage',
          component:require('@/components/HomePage').default,
          // components: {
          //     mainRouter: require('@/components/HomePage').default,
          // },
          children:[
              {
                  path: 'shortcut',
                  name: 'shortcut',
                  component:require('@/components/shortcut/shortcut').default
              }
          ]
      },



  ]
})
