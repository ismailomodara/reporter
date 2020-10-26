<template>
  <div class="rp-navigation">
    <el-container>
      <router-link to="/">
        <div class="rp-logo">
          <span></span>
          <p>Logo</p>
        </div>
      </router-link>
      <div class="rp-nav--links">
        <router-link :to="{ name: 'login'}"><el-button type="primary" plain class="is-white">Login</el-button></router-link>
        <router-link :to="{ name: 'report'}"><el-button type="primary">Report A Case</el-button></router-link>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.rp-navigation {
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  display: flex;
  align-items: center;
  z-index: 99;

  .el-container {
    justify-content: space-between;
    flex-direction: row !important;
  }

  .rp-nav--links {
    display: flex;
    align-items: center;

    a:not(:last-child) {
      margin-right: 20px;
    }
  }
}

  @media (max-width: 600px) {
    .rp-nav--links a:first-child {
      display: none;
    }
  }
</style>
