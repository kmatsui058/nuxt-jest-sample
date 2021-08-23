<template>
  <div class="name">{{ name }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  Ref,
  ref,
  useFetch,
  computed,
  useStore,
} from '@nuxtjs/composition-api'
import { UserData } from '~/oas'
import { authStore } from '~/store'

export default defineComponent({
  name: 'IndexPageComponent',
  setup() {
    const self: Ref<null | UserData> = ref(null)
    const { fetch } = useFetch(async () => {
      await authStore.fetchSelf()
      self.value = authStore.getSelf
    })
    fetch()
    const name = computed(() => {
      return self.value?.name
    })
    const store = useStore()
    const axels = store.getters['mymodule/axels']
    return { name, fetch, axels }
  },
})
</script>
