<template>
  <div class="rp-summary--card">
    <div class="rp-summary--card__text">
      <p>{{ label }}</p>
      <h1>{{ value }}</h1>
    </div>
    <div class="rp-summary--card__icon"></div>
  </div>
</template>

<script>
export default {
  name: 'SummaryCard',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .rp-summary--card {
    background: #fff;
    box-shadow: -4px 16px 30px #57645e29;
    border-radius: 10px;
    padding: 40px 30px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .rp-summary--card__text {
      p {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      h1 {
        font-weight: 600;
      }
    }

    .rp-summary--card__icon {
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
</style>
