<template>
  <div class="rp-page--header">
    <el-container>
      <slot />
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {}
  },
  computed: {},
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
  .rp-page--header {
    background: #ffffff;
    height: 60vh;
    display: flex;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
