<template>
  <div class="">
    <h1>{{ $nuxt.$fire.auth.currentUser.email }}</h1>
    <button @click="signout"><div>signout</div></button>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      $nuxt.$fire.auth.signOut()
    }
  }
}
</script>
