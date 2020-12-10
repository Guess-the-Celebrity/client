<template>
  <div class="d-flex justify-content-center pt-1">
    <div class="card bg-secondary rounded-3 shadow">
      <div class="container p-3">
        <h3 class="text-light">Room Name</h3>
        <input
          class="form-control form-control-lg"
          v-model="RoomName"
          type="text"
          placeholder="e.g Secret Room"
          aria-label=".form-control"
        />
        <button
          @click="createRoom"
          class="mb-3 mt-3 btn btn-outline-warning btn-lg"
        >
          <b>Create Room</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateRoomForm',
  data () {
    return {
      RoomName: ''
    }
  },

  methods: {
    createRoom () {
      this.$store.commit('createRoom', this.RoomName)
      this.$store.commit('randRoomImages')
      this.RoomName = ''
    }
  }

}
</script>

<style>
</style>
