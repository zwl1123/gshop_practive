import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import('../pages/Msite/Msite')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Search = () => import('../pages/Search/Search')
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
//二级路由
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/msite',
      meta:{
        showFooter:true
      }
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods,
        },
        {
          path:'/shop/ratings',
          component:ShopRatings,
        },
        {
          path:'/shop/info',
          component:ShopInfo,
        },
        {
          path:'/',
          redirect:'/shop/goods',
        }
      ]
    }
  ]
})

