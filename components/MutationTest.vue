<template>
  <div>{{ axles }}</div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { mymoduleStore } from '~/store'

export default defineComponent({
  name: 'MutationTestComponent',
  setup() {
    mymoduleStore.incrWheels(4)
    const axles = computed(() => mymoduleStore.axles)
    return { axles }
  },
})
</script>
