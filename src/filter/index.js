import moment from 'moment'
import Vue from 'vue'
Vue.filter('dateString', function (value, format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})

