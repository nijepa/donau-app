<template>
  <ul class="">
    <li v-for="comment in coms" :key="comment.id">
      <div class="comment__content" v-if="!selected.mode">
        <h5>{{ comment.title }}</h5>
        <button @click="setMode(comment)">
          <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#494c4e" d="M22.707 5.536l-4.243-4.243.707-.707c.782-.78 2.048-.78 2.83 0L23.413 2c.78.78.78 2.047 0 2.828l-.707.708zM17.38 5.208l1.412 1.412-4.586 4.586-2.53 2.53-5.756 5.756L4.852 20l-1.507.656L4 19.15l.51-1.068 5.755-5.756 2.53-2.53 4.585-4.588m0-2.828l-6 6-2.53 2.53-6 6-.67 1.41-2.15 4.94c-.04.12-.04.25 0 .37.04.07.1.13.16.18.05.06.11.12.18.16.06.02.12.03.19.03.06 0 .12-.01.18-.03l4.94-2.15 1.41-.67 6-6 2.53-2.53 6-6-4.24-4.24z"/>
          </svg>
        </button>
        <p class="comment__desc">{{ comment.description }}</p>
        <p class="comment__user">{{ comment.user.name }}</p>
      </div>
      <comments-actions :com="comment" @deselect="selected.mode = null" v-if="selected.mode && selected.comment.id === comment.id" />
    <!--   <div class="coment__action" v-if="selected.mode && selected.comment.id === comment.id">
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
          <button @click="selected.mode = null" role="link">
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
      </div> -->
    </li>
  </ul>
</template>

<script>
import CommentsActions from './CommentsActions.vue'
export default {
  name: 'Comments',
  props: ['coms'],
  components: { CommentsActions },
  data() {
    return {
      comments: this.coms,
      selected: {
        mode: null,
        comment: null
      }
    }
  },
   
  methods: {
     setMode(comment) {
      this.selected.mode = 'edit'
      this.selected.comment = comment
    },
    setAdd(id)  {
      this.selected.mode = 'add'
      console.log('dsfsdgsgsg')
    },
    changedDesc(desc) {
      this.selected.comment.description = desc
    }, 
  },
  created() {
    //this.$parent.$on('setAdd', this.setAdd);
  }
}
</script>

<style lang="scss" scoped>
  ul {
    grid-column: 1/4;
    margin: 0 ;

    li {
      list-style: none;
      border-bottom: 1px solid #c4d0fa;

      .comment__content {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: .2em;

        button {
          border: none;
          background-color: transparent;
          cursor: pointer;
        }

        button:hover {
          svg path {
            fill: var(--blue-dark);
          }
        }

        p{
          margin: 0;
          font-size: .8em;
        }

        .comment__desc {
          grid-column: 1/3;
        }

        .comment__user {
          justify-self: end;
        }
      }

      .coment__action {
        border: 1px solid var(--blue-dark);
        border-radius: 0.2em;
        padding: .2em;
        box-shadow: 0 0 1px 1px var(--blue-dark);
      }
    }
    li:last-child {
      border-bottom: 1px solid transparent;
    }
  }
</style>