<template>
  <Projects />
</template>

<script lang="ts">
import { defineComponent, useFetch } from '@nuxtjs/composition-api'
import Projects from '~/components/Projects.vue'
import { authStore } from '~/store'
import '~/assets/scss/hoge.scss'
export default defineComponent({
  name: 'ProjectsPageComponent',
  components: {
    Projects,
  },
  setup() {
    const { fetch } = useFetch(async () => {
      await authStore.fetchSelf()
    })
    fetch()
    return { fetch }
  },
})
</script>

<style lang="scss" scoped>
.name {
  margin: 10px;
}
</style>
