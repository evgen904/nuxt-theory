<template>
  <form>
    <h1>
      Login
    </h1>

    <div class="form-group">
      <input type="text" class="form-control">
    </div>

    <div class="form-group">
      <input type="password" class="form-control">
    </div>

    <div class="form-group">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
    

    <div class="form-group">
      <button class="btn btn-primary">Login</button>
    </div>
  </form>
</template>

<script>
export default {
  layout: "empty"
}
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>