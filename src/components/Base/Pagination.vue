<template>
  <div class="eden-pagination">
    <p>{{ from }} - {{ to }} of {{ total }}</p>
    <el-pagination
        :page-size="pageSize"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="setCurrentPage"
        @current-change="updateCurrentPage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    from: Number,
    to: Number,
    total: Number,
    currentPage: Number,
    pages: Number,
    pageSize: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {}
  },
  computed: {
    setCurrentPage: {
      get () {
        return this.currentPage
      },
      set (value) {
        this.$emit('update:currentPage', value)
      }
    }
  },
  methods: {
    updateCurrentPage (page) {
      this.setCurrentPage = page
    }
  }
}
</script>

<style lang="scss">
  .eden-pagination {
    display: flex;
    align-items: center;
    margin: 40px 0 10px;
    justify-content: flex-end;

    p {
      color: #57645e;
    }
  }

  @media (max-width: 400px) {
    .eden-pagination {
      flex-direction: column;
    }
  }
</style>
