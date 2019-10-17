/*操作state，直接更新状态*/
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPINFO,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USERINFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USERINFO](state){
    state.userInfo = {}
  },
  [RECEIVE_SHOPGOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_SHOPRATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_SHOPINFO](state,{info}){
    state.info = info
  },
  [INCREMENT_COUNT](state,{food}){
    if (!food.count) {
      Vue.set(food,'count',1)
      //有值，就把他加到数组里面
      state.cartFood.push(food)
    } else {
      food.count ++
    }
  },
  [DECREMENT_COUNT](state,{food}){
   if (food.count>0) {
     food.count --
     if(food.count === 0) {
       //没有值，就移除
       state.cartFood.splice(state.cartFood.indexOf(food),1)
     }
   }
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  }


}
