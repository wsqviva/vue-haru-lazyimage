import Vue from 'vue'
import _ from 'lodash/fp'

console.log(123)

// loaded or error image cache
// TODO: handle image query error
// [ ... { src: 'xxx', status: 3 }, { src: 'xxx', status: 4 } ... ]
// let imageCache = []
// let listeners  = []

// const STATUS_PENDING = 1
// const STATUS_LOADING = 2
// const STATUS_LOADED  = 3
// const STATUS_ERROR   = 4

// // 0 -> 1  true
// // 1 -> 0  false
// function processBound(el, isSet) {
//   const bound = el.dataset._lazyloadbound_

//   if (!bound) {
//     isSet && (el.dataset._lazyloadbound_ = 1)
//   } else {
//     !isSet && (el.dataset._lazyloadbound_ = 0)
//   }
  
//   return bound
// }

// // [Object]Array
// function foundInCache(cache, imageUrl) {
//   return _.find(cache, (cacheObj) => {
//     return cacheObj.src === imageUrl
//   })
// }

// function foundIndexInListeners(el) {
//   let index = -1

//   _.find(listeners, (listener, i) => {
//     if (listener.el === el) {
//       index = i
//       return true
//     }
//   })

//   return index
// }

// function numsInListeners(el) {
//   let count = 0

//   _.each(listeners, (listener) => {
//     if (listener.containerEl === el) {
//       ++count
//     }
//   })

//   return count
// }

// // should be functional
// function removeFromListener(el) {
//   Vue.nextTick(() => {
//     const index = foundIndexInListeners(el)

//     if (index !== -1) {
//       const file = listeners[index]

//       if (file.status === STATUS_LOADING) {
//         file.image.onload  = null
//         file.image.onerror = null
//       }

//       const containerEl = file.containerEl
//       const count = numsInListeners(containerEl)

//       // 检查删除的那个containerEl是否在listener中只有一个
//       if (count === 1) {
//         if (processBound(containerEl, false)) {
//           containerEl.removeEventListener('scroll', lazyLoadHandler, false)
//         }
//       }

//       listeners.splice(index, 1)
//     }
//   })
// }

// function renderImage(el, url, status, needCheck) {
//   if (status === STATUS_LOADED) {
//     el.src = url
//   }

//   if (needCheck) {
//     removeFromListener(el)
//   }
// }

// function asyncComplete(file, el, status) {
//   let image = file.image
//   const src = file.src

//   image.onload = null
//   image.onerror = null

//   file.status = status
  
//   imageCache.push({ src, status })

//   renderImage(el, src, status, true)
// }

// function loadImage(file, el, imageUrl) {
//   // 一次滚动加载，有重复的url依然会new Image()，不过问题不大
//   // 当然可以让listeners根据url区分，file.els为[el1, el2 ... ]， 加载后循环render
//   let newImage = file.image = new Image()

//   newImage.onload = () => {
//     asyncComplete(file, el, STATUS_LOADED)
//   }

//   newImage.onerror = () => {
//     asyncComplete(file, el, STATUS_ERROR)
//   }
  
//   file.status = STATUS_LOADING
//   newImage.src = imageUrl

//   // newImage.width && newImage.height
//   if (newImage.complete) {
//     asyncComplete(file, el, STATUS_LOADED)
//   }
// }

// function addListener(el, imageUrl, containerEl) {
//   listeners.push({
//     src: imageUrl,
//     el: el,
//     containerEl: containerEl,
//     status: STATUS_PENDING
//   })
// }

// const lazyLoadHandler = _.debounce(() => {
//   // container element's info
//   // { containerEl: xxx , rect: xxxx }
//   let containers = []

//   _.each(listeners, (file) => {
//     const { src, el, containerEl } = file
//     let containerRect

//     // 可以考虑memorize
//     const container = _.findWhere(containers, { containerEl })
//     if (!container) {
//       containerRect = containerEl.getBoundingClientRect()
//       containers.push({
//         containerEl,
//         rect: containerRect
//       })
//     } else {
//       containerRect = container.rect
//     }
    
//     if (file.status === STATUS_PENDING) {
//       // 二次滚动，发现imageUrl已经有缓存
//       const cacheObj = foundInCache(imageCache, src)
//       if (cacheObj) {
//         renderImage(el, cacheObj.src, cacheObj.status, true)
//         return
//       }
      
//       const { height: imageHeight, top: imageTop } = el.getBoundingClientRect()
//       const { height: containerHeight, top: containerTop } = containerRect
//       const topDistance = imageTop - containerTop
//       if ( topDistance + imageHeight > 0 && topDistance < containerHeight ) {
//         loadImage(file, el, src)
//       }
//     }
//   })
// }, 800)

// module.exports = {

//   // el, binding, vnode
//   bind() {
//     // vnode.context.$nextTick(() => {
//     // })
    
//     // vnode.context.$on('hook:destroyed', () => {
//     //   console.log(1)
//     // })
//   },

//   // 好像只会增加新增加的，才会触发?
//   inserted(el, binding, vnode) {
//     // image url
//     const imageUrl = binding.value
//     // component context
//     const context = vnode.context
//     // container element
//     const containerEl = context.$refs[Object.keys(binding.modifiers)[0]]

//     // insert的时候在imageCache中找到url，直接render
//     const cacheObj = foundInCache(imageCache, imageUrl)
//     if (cacheObj) {
//       renderImage(el, cacheObj.src, cacheObj.status)
//       return
//     }

//     addListener(el, imageUrl, containerEl)

//     if (!processBound(containerEl, true)) {
//       containerEl.addEventListener('scroll', lazyLoadHandler, false)
//       lazyLoadHandler()
//     }
//   },

//   // update() {

//   // },

//   // 只考虑每个指令unbind的情况
//   // 注意下如果其status为loading，将其onload = null，再remove
//   unbind(el) {
//     removeFromListener(el)
//   }
// }
