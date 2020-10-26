<template>
  <div class="page-header">
    <img :src="getImage('report-header.jpg')" alt="" />
    <div class="overlay"></div>
    <el-container>
      <div class="page-header--content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: String,
    subtitle: String
  },
  data () {
    return {}
  },
  computed: {},
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.page-header {
  height: 55vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .page-header--content {
    color: #fff;
    position: relative;
    z-index: 11;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
      color: #fff;
    }
  }
}

  @media (max-width: 600px) {
    .page-header {
      h1 {
        font-size: 2.5rem !important
      }

      p {
        font-size: 1rem !important
      }
    }
  }
</style>
