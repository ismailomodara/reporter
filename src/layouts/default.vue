<template>
  <div class="rp">
    <navigation />
    <slot />
  </div>
</template>

<script>
import Navigation from '../components/Base/Navigation.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation
  }
}
</script>

<style scoped lang="scss">
.rp {
  width: 100%;
  height: 100%;
}
</style>
