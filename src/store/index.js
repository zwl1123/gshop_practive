/*这个是vuex最核心的管理对象store*/

import Vue from 'vue'
import VueX from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(VueX)

export default new VueX.Store({
  state,
  actions,
  getters,
  mutations
})
