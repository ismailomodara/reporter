export default {
  methods: {
    allowAccessFor (roles) {
      const { role } = JSON.parse(localStorage.getItem('chamber-user'))
      if (roles === 'all') {
        return true
      }
      return !!roles.includes(role)
    }
  }
}
