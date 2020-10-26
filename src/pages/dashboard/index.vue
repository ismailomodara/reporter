<template>
  <div v-loading.fullscreen="loading">
    <el-row type="flex" class="flex-wrap mb-2" :gutter="40">
      <el-col v-for="(data, i) in summary" :key="i" :xs="24" :sm="12" :md="8" :lg="8">
        <summary-card :label="data.label" :value="data.value" />
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
        <card :header="false">
          <template slot="content">
            <bar-chart />
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarChart from '../../components/Chart/BarChart'

export default {
  name: 'Dashboard',
  components: {
    BarChart
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    dashboard () {
      return this.$store.getters.dashboard
    },
    summary () {
      return [
        {
          label: 'All Reports',
          value: 0
        },
        {
          label: 'Resolved Reports',
          value: 0
        },
        {
          label: 'Unresolved Reports',
          value: 0
        }
      ]
    }
  }
}
</script>

<style></style>
