import Vue from 'vue'
import _ from 'lodash/fp'
import * as a from './a'

let b = _.map((item) => {
  return item + 1
})
b([1, 2, 3])


// console.log(Vue)
// console.log(a.abc())