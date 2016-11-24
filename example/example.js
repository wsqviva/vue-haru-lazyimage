import './example.styl'

import Vue from 'vue'
import RosterComp from './test'

new Vue({
  el: '#container',

  components: {
    RosterComp
  },

  data: {
    showRoster: true,
    rosterData: [
      { name: 'iloveyou1', avatar: '/example/imgs/1.jpeg' },
      { name: 'iloveyou2', avatar: '/example/imgs/2.jpeg' },
      { name: 'iloveyou3', avatar: '/example/imgs/3.jpeg' },
      { name: 'iloveyou4', avatar: '/example/imgs/4.jpeg' },
      { name: 'iloveyou5', avatar: '/example/imgs/5.jpeg' },
      { name: 'iloveyou6', avatar: '/example/imgs/6.jpeg' },
      { name: 'iloveyou7', avatar: '/example/imgs/7.jpeg' },
      { name: 'iloveyou8', avatar: '/example/imgs/8.jpeg' },
      { name: 'iloveyou9', avatar: '/example/imgs/9.jpeg' },
      { name: 'iloveyou10', avatar: '/example/imgs/10.jpeg' },
      { name: 'iloveyou11', avatar: '/example/imgs/11.jpeg' },
      { name: 'iloveyou12', avatar: '/example/imgs/12.jpeg' },
      { name: 'iloveyou13', avatar: '/example/imgs/13.jpeg' },
      { name: 'iloveyou14', avatar: '/example/imgs/14.jpeg' },
      { name: 'iloveyou15', avatar: '/example/imgs/15.jpeg' },
      { name: 'iloveyou16', avatar: '/example/imgs/16.jpeg' },
      { name: 'iloveyou17', avatar: '/example/imgs/17.jpeg' },
      { name: 'iloveyou18', avatar: '/example/imgs/18.jpeg' },
      { name: 'iloveyou19', avatar: '/example/imgs/19.jpeg' },
      { name: 'iloveyou20', avatar: '/example/imgs/20.jpeg' },
      { name: 'iloveyou21', avatar: '/example/imgs/21.jpeg' },
      { name: 'iloveyou22', avatar: '/example/imgs/22.jpeg' }
    ]
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