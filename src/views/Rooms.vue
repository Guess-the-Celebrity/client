<template>
  <div class="rooms">
    <h1 class="mb-10">This is an about page</h1><br><br><br>
    <div class="container-fluid d-flex mt -10 justify-content-around p-0">
      <div class="container-fluid d-flex flex-row p-0 mr-3 col-3 justify-content-center">
        <h1>CREATE ROOM</h1>
      </div>
      <div class="container-fluid d-flex flex-row flex-wrap p-0 m-0 col-9 justify-content-around ">
        <!-- // Looping RoomCard di Sini -->
        <!-- // Props nama Room yang diinput ke roomCard -->
        <RoomCard></RoomCard>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RoomCard from '../components/RoomCard'

export default {
  name: 'Rooms',
  components: {
    RoomCard
  },
  data () {},
  methods: {}
}
</script>
