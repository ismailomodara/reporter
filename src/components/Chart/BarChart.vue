<template>
  <bar-chart-instance
    :chart-data.sync="chartData"
    :options.sync="chartOptions"
    :height="400"
  />
</template>

<script>
import BarChartInstance from './bar-chart'

export default {
  name: 'BarChart',
  components: {
    BarChartInstance
  },
  data () {
    return {}
  },
  computed: {
    chartData () {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const reports = [10, 15, 12, 8, 20, 18, 12, 7, 19, 11, 6, 2]

      return {
        labels: labels,
        datasets: [
          {
            label: 'Number of Reports',
            backgroundColor: 'rgb(0, 0, 0)',
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: reports
          }
        ]
      }
    },
    chartOptions () {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              stacked: true
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              stacked: true,
              ticks: {
                beginAtZero: true,
                stepSize: 2
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || ''
              let value
              if (tooltipItem.datasetIndex === 1) {
                value =
                  tooltipItem.yLabel + data.datasets[0].data[tooltipItem.index]
              } else {
                value = tooltipItem.value
              }
              if (label) {
                label += ': '
              }
              label += value
              return label
            }
          }
        },
        layout: {
          padding: {
            top: 10
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
