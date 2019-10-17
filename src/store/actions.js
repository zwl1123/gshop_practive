/*间接更新状态，通知mutations*/
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

import {
  reqAddress,
  reqCategorys,
  reqShopList,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchShops
} from '../api/index'

export default {
  async getAddress({commit,state}){
    // const {latitude,longitude} = state
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit,state}){
    const result = await reqCategorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShopList(longitude,latitude)
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USERINFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    //登陆的时候已经把session保存在浏览器里面了
    const result = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO,{userInfo})
    }
  },
  //异步登出
  async logout({commit}){
    //登陆的时候已经把session保存在浏览器里面了
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USERINFO)
    }
  },

  //异步获取商家信息
  async getShopGoods({commit},fn){
    //登陆的时候已经把session保存在浏览器里面了
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_SHOPGOODS,{goods})
      fn()
    }
  },
  async getShopRatings({commit}){
    //登陆的时候已经把session保存在浏览器里面了
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_SHOPRATINGS,{ratings})
    }
  },
  async getShopInfo({commit}){
    //登陆的时候已经把session保存在浏览器里面了
    const result = await reqShopInfo()
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_SHOPINFO,{info})
    }
  },
  //更新count
  updateCount ({commit},{isAdd,food}) {
    if(isAdd){
      commit(INCREMENT_COUNT,{food})
    }else {
      commit(DECREMENT_COUNT,{food})
    }
  },

  //异步获取商家列表
  async SearchShops ({commit,state},keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash,keyword)
    if(result.code === 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  }

}
