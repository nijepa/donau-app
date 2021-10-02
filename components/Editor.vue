<template>
  <div class="example">
      <quill-editor
        v-model="content"
        :options="editorOption"
        @change="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
  </div>
</template>

<script>
  export default {
    name: 'quill-example-nuxt',
    props: ['desc'],
    data () {
      return {
        content: this.desc,
        editorOption: {
          // Some Quill options...
          theme: 'snow',
          placeholder: 'Opis sastanka...',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ]
          }
        }
      }
    },
    mounted() {

  
    },
    methods: {
      onEditorBlur() {
        this.$emit('changed', this.content)
        //console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        //console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        //console.log('editor ready!', editor)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    .editor {
      height: 40rem;
      overflow: hidden;
    }

    .output {
      width: 100%;
      height: 20rem;
      margin: 0;
      border: 1px solid #ccc;
      overflow-y: auto;
      resize: vertical;

      &.code {
        padding: 1rem;
        height: 16rem;
      }

      &.ql-snow {
        border-top: none;
        height: 24rem;
      }
    }
  }
</style>