<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide  v-show="$route.meta.showFooter"></FootGuide>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide'
  import {mapActions} from 'vuex'

  export default {
    mounted(){
      this.getAddress(),
      this.getCategorys()
      this.getShops()
      this.getUserInfo()
      this.getShopInfo()
    },
    methods:{
      ...mapActions(['getAddress','getCategorys','getShops','getUserInfo','getShopGoods',
      'getShopInfo'])
    },
    components:{
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
