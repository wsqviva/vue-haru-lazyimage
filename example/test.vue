<template>
  <transition name="fade" type="transition">
    <div class="simpleroster-wrapper" v-show="showRoster">
      <div class="simpleroster" ref="simpleroster">
        <div class="simpleroster-inner">
          <div class="roster-title">共100人</div>
          <div class="roster-list-warpper">
            <ul class="roster-list">
              <li class="roster-item" v-for="item in rosterData">
                <div class="roster-item-avatar-wrapper">
                  <!-- v-lazyload-image.simpleroster="item.profileImage" -->
                  <img class="roster-item-avatar" src="/example/imgs/default.png" width="20" height="20">
                </div>
                <span class="roster-item-name">张学友</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// const lazyloadImage = require('./vue-lazyload-image')

export default {

  props: {
    showRoster: {
      type: Boolean,
      required: true
    },
    
    rosterData: {
      type: Array,
      required: true
    }

    // { left: xxx, top: xxx }
    // rosterPos: Object
  }

  // directives: {
  //   lazyloadImage
  // }
}

</script>

<style lang="stylus">
.simpleroster-wrapper
  position: absolute
  width: 236px
  padding: 10px 4px 10px 10px
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25)
  background-color: #fff
  z-index: 555

.simpleroster
  max-height: 208px
  overflow: auto
  
  .roster-title
    height: 18px
    line-height: 18px
    margin-bottom: 5px
    font-family: "PingFangSC-Medium"
    font-size: 13px
    color: #999

  .roster-item
    height: 20px
    line-height: 20px
    margin-bottom: 4px
    font-size: 0

    &:last-child
      margin-bottom: 0

  .roster-item-avatar-wrapper
    display: inline-block
    vertical-align: middle
    height: 20px
    margin-right: 8px

    .roster-item-avatar
      width: 20px
      height: 20px

  .roster-item-name
    display: inline-block
    vertical-align: middle
    height: 20px
    font-size: 13px
    font-family: "PingFangSC-Regular"
    color: #999
</style>