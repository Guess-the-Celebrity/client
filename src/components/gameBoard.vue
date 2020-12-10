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
                    <li class="media">
                        <img src="../img/star.png" class="img-player ml-2" alt="...">
                        <div class="media-body text-left ml-3 mt-2">
                        <h5 class="mt-0 mb-1 text-white font-weight-bold text-monospace">Mozart</h5>
                        </div>
                    </li>
                  </ul>
              </div>
          </div>
          <div class="col-8">
              <div class="text-center">
                  <h1>Who is This ?</h1>
              </div>
              <img src="../img/sule.jpg" alt="" class="img-quiz">
              <div class="container mt-3">
                  <div class="form-group ">
                    <div class="d-flex justify-content-center p-0">
                    <input v-model="answer" placeholder="Your Answer" type="text" class=" col-4 form-control w-50 mr-2" id="answer">
                    <button @click="submitAnswer" class=" col-1 btn btn-sm btn-warning">enter</button>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    submitAnswer () {
      console.log('submitted')
      this.answer = ''
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
