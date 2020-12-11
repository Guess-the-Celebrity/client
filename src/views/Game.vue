<template>
  <div>
      <label>Username</label>
      <input type="text" v-model="username"><br>
      <img :src="this.randomData.image" alt="" id='imageId'>
      <form @submit.prevent="inputData(randomData.id)">
          <input
            type="text"
            v-model="input"
            placeholder="Your Answer"
            autocomplete="off"
          >
          <button>Submit</button>
          <h3>{{ this.count }}</h3>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      username: '',
      input: '',
      count: ''
    }
  },
  computed: {
    randomData () {
      return this.$store.state.randomData
    },
    limit () {
      return this.$store.state.limit
    }
  },
  methods: {
    inputData (data) {
      if (this.input.toLowerCase() === this.randomData.name.toLowerCase()) {
        this.count++
        this.$socket.emit('answer', { username: this.username, input: this.input, id: data, count: this.count })
        this.input = ''
      }
      if (this.count === this.limit) {
        this.$socket.emit('end', { username: this.username })
      }
    }
  },
  sockets: {
    // init (payload) {
    //   this.gameStars = payload
    //   const randomNum = Math.floor(Math.random() * payload.length)
    //   this.randomData = payload[randomNum]
    // },
    // serverPass (payload) {
    //   console.log(payload)
    // },
    // gameDone (payload) {
    //   console.log('player with username ' + payload.username + ' is the winner')
    // }
  }
}
</script>

<style>
  #imageId{
      width: 200px;
      height: 300px;
  }
</style>
