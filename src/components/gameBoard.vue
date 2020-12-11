<template>
  <div class="container-fluid">
      <div class="row" style="min-height: 100vh">
          <div class="col-4 bg-secondary">
              <div>
                  <div class="mt-2 media-body">
                      <h3 class="text-warning"><b>Players</b></h3>
                      <div class="container">
                        <hr class="bg-light">
                      </div>
                  </div>
                  <ul class="list-unstyled">
                    <PlayerCard
                     v-for="(player, i) in playerName"
                     :key="i"
                     :player='player'
                    ></PlayerCard>
                  </ul>
              </div>
          </div>
          <div class="col-8">
              <div class="text-center">
                  <h1>Who is This ?</h1>
              </div>
              <img :src="randomData.image" alt="" class="img-quiz">
              <div class="container mt-3">
                  <div class="form-group ">
                    <div class="d-flex justify-content-center p-0">
                    <input v-model="answer" placeholder="Your Answer" type="text" class=" col-4 form-control w-50 mr-2" id="answer">
                    <button @click="inputData(randomData.id)" class=" col-1 btn btn-sm btn-warning">enter</button>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PlayerCard from '../components/playerCard'
export default {
  data () {
    return {
      answer: ''
    }
  },
  components: {
    PlayerCard
  },
  methods: {
    inputData (data) {
      if (this.answer.toLowerCase() === this.randomData.name.toLowerCase()) {
        for (let i = 0; i < this.playerName.length; i++) {
          if (this.playerName[i].username === localStorage.username) {
            this.playerName[i].count++
          }
        }
        this.$socket.emit('answer', this.playerName)
        this.answer = ''
      }
      for (let i = 0; i < this.playerName.length; i++) {
        if (this.playerName[i].username === localStorage.username) {
          if (this.playerName[i].count === this.limit) {
            console.log('enddd')
            this.$socket.emit('end', { username: localStorage.username })
          }
        }
      }
    }
  },
  computed: {
    playerName () {
      return this.$store.state.playerName
    },
    randomData () {
      return this.$store.state.randomData
    },
    limit () {
      return this.$store.state.limit
    }
  }
}
</script>

<style>
  .img-player {
      width: 30px;
  }

  .img-quiz {
      height: 400px;
  }
</style>
