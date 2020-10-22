<template>
  <component :is="layout">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    layout () {
      return `${this.$route.meta.layout || 'default'}-layout`
    }
  }
}
</script>

<style scoped lang="scss"></style>
