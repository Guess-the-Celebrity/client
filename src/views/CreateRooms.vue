<template>
  <div id="create-rooms" class="m-0">
    <br>
    <h1 class="mt-30">CREATE or JOIN ROOM</h1>
    <br /><br />
    <div class="container d-flex mt-10 justify-content-around p-0">
      <div id="addroom-left"
        class="container-fluid d-flex flex-column flex-start p-0 mr-3 col-3 justify-content-center ;"
      >
        <h1>Create Room</h1>
        <CreateRoomForm></CreateRoomForm>

      </div>
      <div
        class="container-fluid d-flex flex-row-reverse flex-wrap p-0 m-0 col-10 "
      >
        <!-- // Looping RoomCard di Sini -->
        <!-- // Props nama Room yang diinput ke roomCard -->
        <RoomCard
         v-for="(room, i) in roomlist" :key="i " :roomName="room" :id="i"
         >

        </RoomCard>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RoomCard from '../components/RoomCard'
import CreateRoomForm from '../components/CreateRoomForm'

export default {
  name: 'CreateRooms',
  components: {
    RoomCard,
    CreateRoomForm
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    roomlist () {
      return this.$store.state.roomlist
    }

  }
}
</script>

<style>
#create-rooms {
  background-image: url("../img/background.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#addroom-left{
  align-items: flrx-start;
}

</style>
