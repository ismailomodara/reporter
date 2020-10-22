<template>
  <div>
    <navigation />
    <slot />
  </div>
</template>

<script>
import Navigation from '../components/Base/Navigation.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
  },
};
</script>

<style scoped></style>
