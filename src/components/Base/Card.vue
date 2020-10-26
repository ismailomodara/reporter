<template>
  <div class="rp-card">
    <div v-if="header" class="rp-card--heading">
      <slot name="header" />
    </div>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    header: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.rp-card {
  background: #fff;
  box-shadow: -4px 16px 30px #57645e29;
  border-radius: 10px;
  padding: 40px 30px;
  position: relative;
  margin-bottom: 30px;

  .rp-card--heading {
    min-height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 100%;
    }

    h6 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1rem;
      opacity: 0.5;
      margin-right: 10px;
    }
  }
}
</style>
