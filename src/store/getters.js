/*
定义一些需要vuex里面state产生的计算属性
 */

export default {
  totalCount (state) {
    return state.cartFood.reduce((preTotal,food)=>{return preTotal + food.count},0)
  },

  totalPrice (state) {
    return state.cartFood.reduce((preTotal,food)=>{return preTotal + food.count * food.price},0)
  },
}
