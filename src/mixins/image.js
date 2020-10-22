export default {
  methods: {
    getImage (image) {
      const imageUrl = image
      if (image.indexOf('http') < 0) {
        return require(`../assets/img/${imageUrl}`)
      }
      return imageUrl
    }
  }
}
