<template>
  <div
    class="rp-avatar"
    :style="{
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: background
    }"
  >
    <img
      :src="src || userIcon"
      alt="User"
      :class="{ 'user-icon': !src }"
      :style="{ height: src ? '100%' : `${size / 2.5}px` }"
    />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: String,
    size: {
      type: Number,
      default: 50
    },
    background: {
      type: String,
      default: '#798B8330'
    }
  },

  data () {
    return {}
  },
  computed: {
    userIcon () {
      return require('@/assets/img/user.svg')
    }
  }
}
</script>

<style scoped lang="scss">
.rp-avatar {
  border-radius: 1000px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px #57645e29;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 100%;

    &.user-icon {
      object-fit: contain !important;
    }
  }
}
</style>
