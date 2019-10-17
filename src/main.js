// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'

import App from './App'
import router from './router'
import store from './store/index'
import './mock/mockServer'
import loading from './common/dist/loading.gif'
import './filter'
//
Vue.component(Button.name,Button)   //在全局里面多了个<mt-button>
Vue.use(VueLazyload, {
  loading
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render :h => h(App),
  router,
  store
})
