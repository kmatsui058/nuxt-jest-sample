<template>
  <div>{{contents}}</div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { defineComponent, Ref, ref, useContext, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IndexPageComponent',
  setup() {
    const context = useContext()
    const contents: Ref<null | IContentDocument | IContentDocument[]> = ref(null)
    useFetch(async ()=>{
         contents.value = await context.$content().fetch()

    })
    return {contents}
  },
})
</script>
