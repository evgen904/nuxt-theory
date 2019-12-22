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
  // async asyncData({store, error}) {
  //   try {
  //     await store.dispatch('users/fetchUsers')
  //     return {}
  //   } catch (e) {
  //     error(e)
  //   }    
  // },
  // async fetch({store, error}) {
  //   try {
  //     if (store.dispatch('users/fetchUsers').length === 0) {
  //       await store.dispatch('users/fetchUsers')
  //     }      
  //   } catch(e) {
  //     error(e)
  //   }
  // },
  data: () => ({
    pageTitle: 'Users page'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id);
    }
  }
}
</script>