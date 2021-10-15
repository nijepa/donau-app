<template>
  <section class="">
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>{{ user.displayName }}</p><span>{{ user.email }}</span>
      </li>
    </ul>
    <user />
  </section>
</template>

<script>
export default {
  name: 'users',
  data() {
    return {
      isLoaded: false,
      users: [],
      submitted: false,
    }
  },
  methods: {
    async readFromFirestore() {
      //const user = this.$fire.auth()
      //
      const messageRef = await this.$fire.firestore.collection('users').get()
      try {
        const messageDoc = await messageRef.docs.map(doc => {
          const bio = doc.data()
          return {id: doc.id, ...bio}
        });
        console.log(messageDoc)
        //const promiseThemes = snapshot.docs.map(doc => {id: doc.id, ...doc.data());
        this.users = messageDoc
        //alert(messageDoc.data().message)
      } catch (e) {
        alert(e)
        return
      }
    }
  },
  mounted() {
    this.readFromFirestore()
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;

    li {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      justify-items: start;
      gap: .5em;
    }
  }
</style>