<template>
  <section>
    <h1>Users page</h1>
    
    <ul v-for="user in users" :key="item">
      <li>
        <a href="#" @click="goTo(user)">User {{ user }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    users: [
      1, 2, 3, 4, 5 
    ]
  }),
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user);
    }
  }
}
</script>