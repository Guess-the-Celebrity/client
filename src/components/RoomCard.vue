<template>
  <b-card
    :img-src=roomImages[id]
    img-top
    tag="article"
    style="max-width: 300px; height: 200px; margin-right: 5px"
    class="mb-2 p-0 text-left "
    bg-variant="dark"
    text-variant="white"

    rounded
  >
    <div class= "d-flex flex-row p-0 justify-content-between">
      <h6 class=" card-title col-6 p-0 ">{{roomName}}</h6>
      <p class=" card-title col-6 p-0 text-muted ">by. {{roomName}}</p>
    </div>
    <div class= "d-flex flex-row p-0 justify-content-between">
      <b-button @click="enterRoom" class="col-4" href="#" variant="secondary">JOIN</b-button>
      <!-- <b-button @click="enterRoom" class="col-6" href="#" variant="secondary">JOIN</b-button> -->
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'RoomCard',
  data () {
    return {
      roomImages: [
        'https://source.unsplash.com/8I-ht65iRww/320x90',
        'https://source.unsplash.com/n-2_KHgeAy0/320x90',
        'https://source.unsplash.com/pJKpk_rOLnw/320x90',
        'https://source.unsplash.com/Oz7_usBqwuY/320x90',
        'https://source.unsplash.com/jhARm0AqF_E/320x90',
        'https://source.unsplash.com/-Ba2BMyleDU/320x90'
      ]

    }
  },
  methods: {
    enterRoom () {
      console.log('Masuk Room')
      this.$router.push('/room')
    }

  },
  props: ['roomName', 'id']
}
</script>

<style>
</style>
