import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import './theme/index.css'
import App from './App'
import router from './router'
import store from './store'
import 'vue2-animate/dist/vue2-animate.min.css';

Vue.use(ElementUI);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
