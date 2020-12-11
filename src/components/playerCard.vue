<template>
  <li class="media">
        <img src="../img/star.png" class="img-player ml-2" alt="...">
        <div class="media-body text-left ml-3 mt-2">
            <h5 class="mt-0 mb-1 text-white font-weight-bold text-monospace">{{player.username}}</h5>
        </div>
        <div class="media-body mt-2">
            <h5 class="mt-0 mb-1 text-white font-weight-bold text-monospace">{{player.count}}</h5>
        </div>
  </li>
</template>

<script>
export default {
  computed: {
    playerName () {
      return this.$store.state.username
    },
    hasilScore () {
      return this.$store.state.hasilScore
    }
  },
  props: ['player']
}
</script>

<style>

</style>
