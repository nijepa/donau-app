<template>
  <ul class="">
    <li v-for="comment in coms" :key="comment.id">
      <h5>{{ comment.title }}</h5>
      <p>{{ comment.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Comments',
  props: ['coms'],
  data() {
    return {
      comments: []
    }
  }

}
</script>

<style lang="scss" scoped>
  ul {
    grid-column: 1/4;
    margin: 0 ;

    li {
      display: flex ;
      flex-direction: column;
      padding: .2em;
      border-bottom: 1px solid #c4d0fa;

      p{
        margin: 0;
        font-size: .8em;
      }
    }
    li:last-child {
      border-bottom: 1px solid transparent;
    }
  }
</style>