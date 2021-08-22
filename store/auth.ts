import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { AxiosResponse } from 'axios'
import { $apiConfig } from '@/plugins/api-accessor'
import { DefaultApi, UserData } from '~/oas'

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
  preserveState: true,
})
export default class AuthModule extends VuexModule {
  private accessToken: string | null = null
  private self: UserData | null = null

  get getAccessToken(): string | null {
    return this.accessToken
  }

  get getSelf(): UserData | null {
    return this.self
  }

  @Mutation
  setSelf(value: UserData | null): void {
    this.self = value
  }

  @Action
  async fetchSelf(): Promise<void> {
    const res: AxiosResponse<UserData> = await new DefaultApi(
      $apiConfig
    ).apiV2UsersMyselfGet()
    this.setSelf(res.data)
  }
}
