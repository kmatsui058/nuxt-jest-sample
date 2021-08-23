<template>
  <div>
    <User />
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :project-name="project.name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch, ref, Ref } from '@nuxtjs/composition-api'
import User from '~/components/User.vue'
import Project from '~/components/Project.vue'
import { projectsStore } from '~/store'
import '~/assets/scss/hoge.scss'
import { ProjectItem } from '~/oas'
export default defineComponent({
  name: 'ProjectsComponent',
  components: {
    User,
    Project,
  },
  setup() {
    const projects: Ref<ProjectItem[]> = ref([])
    const { fetch } = useFetch(async () => {
      await projectsStore.fetchProjects()
      projects.value = projectsStore.getProjects
    })
    fetch()
    return { projects, fetch }
  },
})
</script>

<style lang="scss" scoped>
.name {
  margin: 10px;
}
</style>
