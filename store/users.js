export const actions = {
  // async если метод асинхронный
  async fetchUsers() {
    try {
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      return users
    } catch (e) {
      throw e
    }    
  }
}