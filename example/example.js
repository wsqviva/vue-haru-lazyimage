import Vue from 'vue'
import RosterComp from './test'

new Vue({
  el: '#container',

  components: {
    RosterComp
  },

  data: {
    showRoster: true,
    rosterData: [ 'a', 'b', 'c' ] 
  },

  render(h) {
    return (
      <div>
        <span>点击</span>
        <rosterComp showRoster={this.showRoster} rosterData={this.rosterData} />
      </div>
    )
  }
})