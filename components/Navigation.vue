<template>
  <nav>
    <img src="/logo-Donau.svg" alt="">
    <ul class="">
      <li>
        <nuxt-link to="/auth/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/companies">Companies</nuxt-link>
      </li>
    </ul>
    <a href="#">{{ $nuxt.$fire.auth.currentUser.email }}</a>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: .5em;
    border-bottom: 1px solid black;

    img {
      width: 40px;
    }

    ul {
      display: flex;
      list-style: none;
      column-gap: 1em;
      align-items: center;
      justify-self: center;

    }
  }
  a{
    text-decoration: none;
    padding: .5em;
    border-radius: .2em;
  }
  a:hover {
    text-shadow: 2px 2px 3px rgb(54, 82, 238);
  }
  a.nuxt-link-active {
    //font-weight: bold;
  }
/* exact link will show the primary color for only the exact matching link */
  a.nuxt-link-exact-active {
    color: whitesmoke;
    background-color: var(--blue-dark);
    //text-shadow: 2px 2px 3px rgb(54, 82, 238);
  }
</style>