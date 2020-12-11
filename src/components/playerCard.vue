<template>
  <li class="media">
        <img src="../img/star.png" class="img-player ml-2" alt="...">
        <div class="media-body text-left ml-3 mt-2">
            <h5 class="mt-0 mb-1 text-white font-weight-bold text-monospace">{{player}}</h5>
        </div>
        <div class="media-body mt-2">
            <h5 class="mt-0 mb-1 text-white font-weight-bold text-monospace">0</h5>
        </div>
  </li>
</template>

<script>
export default {

  props: ['player']

}
</script>

<style>

</style>
