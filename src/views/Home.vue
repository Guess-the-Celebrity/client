<template>
  <div class="jumbotron jumbotron-fluid mb-0 ">
    <div class="d-flex justify-content-center">
      <div class="card bg-secondary rounded-3 shadow ">
        <div class="container pt-5 mt-4">
          <input
            class="form-control form-control-lg mb-2 mt-4"
            v-model="username"
            type="text"
            placeholder="e.g Your Name"
            aria-label=".form-control-lg example"
          />
          <button @click="login" class="mb-3 btn btn-outline-warning btn-lg">
            <b>Enter</b>
          </button>
        </div>
      </div>
    </div>
    <img class="loginImg" src="../img/guess-star.png" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      const username = this.username
      localStorage.setItem('username', this.username)
      this.$socket.emit('inputUsername', username)
      this.$router.push('/room')
      this.username = ''
    }

  }
}
</script>

<style>
.loginImg {
  position: relative;
  z-index: 10;
  top: -315px;
}
.d-flex {
  padding-top: 200px;
}

.card {
  width: 350px;
}

.jumbotron {
  background-image: url("../img/background.png");
  /* max-height: vh; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
