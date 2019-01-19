import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(lazyLoad, {error: './assets/fallback.jpg', loading:'./assets/spinner.svg'});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
