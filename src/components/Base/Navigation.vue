<template>
  <el-container>
    <div class="rp-navigation">
      <div class="rp-logo">
        <span></span>
        <p>Logo</p>
      </div>
      <ul class="rp-nav--links">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
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
  justify-content: space-between;
  align-items: center;

  .rp-logo {
    display: flex;
    align-items: center;

    span {
      height: 50px;
      width: 50px;
      background: #000;
      margin-right: 5px;
    }

    p {
      font-weight: 600;
    }
  }

  .rp-nav--links {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 10px 20px;
      color: #000000;

      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
