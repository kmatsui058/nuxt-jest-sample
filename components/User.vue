<template>
  <div class="name">{{ name }}</div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { authStore } from '~/store'
import '~/assets/scss/hoge.scss'
export default defineComponent({
  name: 'UserComponent',
  setup() {
    const name = computed(() => {
      return authStore.getSelf?.name
    })
    return { name }
  },
})
</script>
