export default {
  methods: {
    inputField () {
      return [
        {
          required: true,
          message: 'This field is required',
          trigger: 'change'
        }
      ]
    },
    emailField () {
      return [
        {
          required: true,
          message: 'This field is required',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Email address is not valid',
          trigger: ['blur', 'change']
        }
      ]
    }
  }
}
