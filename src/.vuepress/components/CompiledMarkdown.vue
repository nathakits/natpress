<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import Axios from 'axios'
import Marked from 'marked'

export default {
  props: [
    'version'
  ],
  data () {
    return {
      releaseNotes: '',
    }
  },
  mounted () {
    Axios
      .get('https://api.github.com/repos/pupil-labs/pupil/releases/tags/' + this.version)
      .then(response => {
        this.releaseNotes = response.data.body
      })
  },
  computed: {
    compiledMarkdown() {
      return Marked(this.releaseNotes, { sanitize: true })
    }
  }
}
</script>