import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../config/axios'
import router from '../router'
import swal from 'sweetalert'

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
    },
    SOCKET_serverPass (state, payload) {
      console.log(payload)
      state.playerName = payload
    },
    SOCKET_gameDone (state, payload) {
      console.log('player with username ' + payload.username + ' is the winner')
      swal({
        title: 'Congratulations, ' + payload.username + ' !!',
        text: 'You won !!',
        icon: 'success'
      })
      router.push('/')
    },
    SOCKET_addPlayerName (state, payload) {
      state.playerName = payload
    },
    login (state, payload) {
      state.players.push(payload)
    },
    createRoom (state, payload) {
      if (state.roomlist.length < 6) {
        state.roomlist.push(payload)
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
