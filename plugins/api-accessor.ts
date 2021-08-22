import { Plugin } from '@nuxt/types'
import Axios, { AxiosResponse, AxiosError } from 'axios'
import { Configuration as OASConfiguration } from '@/oas'
import { authStore } from '~/store'
import onRejected from '~/utils/onRejected'
declare module 'vue/types/vue' {
  interface Vue {
    $apiConfig: OASConfiguration
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $apiConfig: OASConfiguration
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $apiConfig: OASConfiguration
  }
}
export const $apiConfig: OASConfiguration = new OASConfiguration({
  basePath:
    process.env.USE_STUB === 'true'
      ? process.env.STUB_PATH
      : process.env.API_PATH,
})

const accessor: Plugin = (_, inject) => {
  Axios.interceptors.response.use(
    (r: AxiosResponse): AxiosResponse => {
      return r
    },
    (err: AxiosError): Promise<AxiosError> => {
      const result = onRejected(err)
      return result
    }
  )

  if (authStore.getAccessToken) {
    $apiConfig.baseOptions.Authorization = `Bearer ${authStore.getAccessToken}`
  }
  inject('apiConfig', $apiConfig)
}

export default accessor
