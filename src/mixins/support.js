export default {
  methods: {
    formatPrice (value) {
      return value ? `₦${Number(value).toLocaleString()}` : '₦0'
    },
    formatFigure (value) {
      return Number(value).toLocaleString()
    },
    formatText (text) {
      return text
        ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
        : ''
    },
    formatPhoneNumber (number) {
      let formattedNumber = parseInt(number, 10).toString()
      formattedNumber = formattedNumber.charAt(0) === '2'
        ? formattedNumber
        : `234${formattedNumber}`
      return formattedNumber.length === 13
        ? formattedNumber.replace(
          /(\d{3})(\d{3})(\d{3})(\d{4})/,
          '+$1 $2 $3 $4'
        )
        : '-'
    }
  }
}
