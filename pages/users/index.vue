<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click="goTo(user)">{{ user.name }} ({{user.email}})</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // asyncData вызывается только на серверной части, отобразится до того как приложение загрузится
  async asyncData({store, error}) {
    try {
      const users = await store.dispatch('users/fetchUsers')
      return {users}
    } catch (e) {
      error(e)
    }    
  },
  data: () => ({
    pageTitle: 'Users page'
  }),
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id);
    }
  }
}
</script>