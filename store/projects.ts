import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { AxiosResponse } from 'axios'
import { $apiConfig } from '@/plugins/api-accessor'
import { DefaultApi, ProjectItem } from '~/oas'

@Module({
  name: 'projects',
  stateFactory: true,
  namespaced: true,
  preserveState: false,
})
export default class ProjectsModule extends VuexModule {
  private projects: ProjectItem[] = []

  get getProjects(): ProjectItem[] {
    return this.projects
  }

  @Mutation
  setProjects(value: ProjectItem[]): void {
    this.projects = value
  }

  @Action
  async fetchProjects(): Promise<void> {
    const res: AxiosResponse<ProjectItem[]> = await new DefaultApi(
      $apiConfig
    ).apiV2ProjectsGet()
    this.setProjects(res.data)
  }
}
