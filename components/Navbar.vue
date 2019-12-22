<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">NuxtJS</a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/about">About</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/Login">Login</nuxt-link>
                    </li>
                    <li class="nav-item" v-if="isAuth">
                        <a href="#" class="nav-link" @click.prevent="logout">logout</a>
                    </li>
                </ul>            
            </div>
        </nav>    
    </header>
</template>

<script>
export default {
    name: "navBar",
    computed: {
        isAuth() {
            return this.$store.getters.isAuth
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>