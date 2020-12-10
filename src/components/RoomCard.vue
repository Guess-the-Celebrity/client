<template>
  <b-card
    title="Room Name"
    img-src="https://source.unsplash.com/8I-ht65iRww/320x90"
    img-top
    tag="article"
    style="max-width: 20rem; height: 240px"
    class="mb-2 text-left"
    bg-variant="dark"
    text-variant="white"
    rounded
    >
    <b-card-text>
      Host: {Nama Host}
    </b-card-text>

    <b-button class="col-12" href="#" variant="secondary">JOIN</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'RoomCard'

}
</script>

<style>

</style>
