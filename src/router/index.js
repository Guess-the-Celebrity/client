import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import room from '../views/gameRoom.vue'
import CreateRooms from '../views/CreateRooms.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateRooms',
    component: CreateRooms
  },
  {
    path: '/room',
    name: 'room',
    component: room
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
