<template>
  <div class="name">{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, computed, useAsync } from '@nuxtjs/composition-api'
import { authStore } from '~/store'
import '~/assets/scss/hoge.scss'
export default defineComponent({
  name: 'AsyncPageComponent',
  setup() {
    const fetch = async () => {
      await authStore.fetchSelf()
      return { self: authStore.getSelf }
    }
    const data = useAsync(fetch, 'self')
    const name = computed(() => {
      return data.value?.self?.name
    })
    return { data, name, fetch }
  },
})
</script>

<style lang="scss" scoped>
.name {
  margin: 10px;
}
</style>
