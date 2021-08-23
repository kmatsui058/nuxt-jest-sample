<template>
  <div class="project-name">{{ projectName }}</div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import '~/assets/scss/hoge.scss'
export default defineComponent({
  name: 'ProjectComponent',
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
})
</script>
