import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameStars: [],
    randomData: {},
    limit: 3,
    roomlist: []

  },
  mutations: {
    SOCKET_init (state, payload) {
      state.gameStars = payload
      const randomNum = Math.floor(Math.random() * payload.length)
      state.randomData = payload[randomNum]
    },
    SOCKET_serverPass (state, payload) {
      console.log(payload)
    },
    SOCKET_gameDone (state, payload) {
      console.log('player with username ' + payload.username + ' is the winner')
    },
    createRoom (state, payload) {
      if (state.roomlist.length < 6) {
        state.roomlist.push(payload)
      } else {
        swal('Sorry!', 'Max room created was reached! , (max. 6 rooms)', 'info')
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
