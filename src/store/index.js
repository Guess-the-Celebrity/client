import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../config/axios'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerName: [],
    randomData: {},
    limit: 3,
    roomlist: [],
    players: []

  },
  mutations: {
    SOCKET_init (state, payload) {
      state.randomData = payload
      console.log(payload, 'ini psyloaddd')
    },
    SOCKET_serverPass (state, payload) {
      console.log(payload)
      state.playerName = payload
    },
    SOCKET_gameDone (state, payload) {
      console.log('player with username ' + payload.username + ' is the winner')
    },
    SOCKET_addPlayerName (state, payload) {
      state.playerName = payload
      console.log(state.playerName, '<---')
    },
    login (state, payload) {
      state.players.push(payload)
    },
    createRoom (state, payload) {
      if (state.roomlist.length < 6) {
        state.roomlist.push(payload)
      } else {
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
