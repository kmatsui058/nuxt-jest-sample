<template>
  <div :hoge="hoge">{{ contents }}{{ axles }}</div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  defineComponent,
  Ref,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import { mymoduleStore } from '~/store'

export default defineComponent({
  name: 'IndexPageComponent',
  setup() {
    const context = useContext()
    const axles = mymoduleStore.axles
    const contents: Ref<null | IContentDocument | IContentDocument[]> =
      ref(null)
    useFetch(async () => {
      contents.value = await context.$content().fetch()
    })
    return { contents, axles }
  },
})
</script>
