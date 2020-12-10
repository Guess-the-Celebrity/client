<template>
  <b-card
    img-src="https://source.unsplash.com/8I-ht65iRww/320x90"
    img-top
    tag="article"
    style="max-width: 300px; height: 200px"
    class="mb-2 text-left"
    bg-variant="dark"
    text-variant="white"
    rounded
  >
    <div>
      <h5 class=" card-title col-12">{Room Name}</h5>
    </div>
    <div>
      <b-button @click="enterRoom" class="col-12" href="#" variant="secondary">JOIN</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'RoomCard',
  methods: {
    enterRoom () {
      console.log('Masuk Room')
      this.$router.push('/room')
    }

  }
}
</script>

<style>
</style>
