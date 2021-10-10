<template>
  <div class="coment__action">
    <label>
      <input
        type="text"
        name="text"
        id="email"
        v-model="comment.title"
        required
        placeholder=" "
      />
      <span>Naslov</span>
    </label>
    <Editor :desc="comment.description" @changed="changedDesc" />
    <div class="btn__save">
      <button @click.prevent="save">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#494c4e"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
          />
          <path
            fill="#494c4e"
            d="M10.5 16.5c-.42 0-.82-.176-1.094-.484l-2.963-2.97c-.274-.26-.443-.653-.443-1.06 0-.405.17-.798.462-1.078.482-.513 1.557-.55 2.113.037l1.925 1.93 4.943-4.958c.52-.55 1.575-.57 2.132.02.256.242.425.634.425 1.04 0 .402-.164.79-.45 1.068l-5.993 6.012c-.238.267-.637.443-1.057.443z"
          />
        </svg>
        <div>Sačuvaj</div>
      </button>
      <button @click="$emit('deselect')">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#494c4e" fill-rule="evenodd">
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12A12 12 0 0 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10.015 10.015 0 0 1-10 10z"
            />
            <path
              d="M17.71 16.29c.39.393.39 1.027 0 1.42a1.014 1.014 0 0 1-1.42 0L12 13.42l-4.29 4.29a1.014 1.014 0 0 1-1.42 0 1.008 1.008 0 0 1 0-1.42L10.58 12 6.29 7.71a1.004 1.004 0 0 1 1.42-1.42L12 10.58l4.29-4.29a1.004 1.004 0 0 1 1.42 1.42L13.42 12l4.29 4.29z"
            />
          </g>
        </svg>
        <div>Odustani</div> 
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsActions',
  props: ['com'],
  data() {
    return {
      comment: {title: '', description: ''}
    }
  },
  methods: {
    setAdd(id)  {
      this.selected.mode = 'add'
      console.log('dsfsdgsgsg')
    },
    changedDesc(desc) {
      this.comment.description = desc
    },
  },
  mounted() {
    if(this.com) this.comment = this.com
  }
}
</script>

<style lang="scss" scoped>
  .coment__action {
    border: 1px solid var(--blue-dark);
    border-radius: 0.2em;
    padding: .2em;
    box-shadow: 0 0 1px 1px var(--blue-dark);
  }
</style>