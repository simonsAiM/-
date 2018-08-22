import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('date-format',function(value,formtStr='YYYY-MM-DD HH:mm:ss'){
    return format(value,formtStr)
})