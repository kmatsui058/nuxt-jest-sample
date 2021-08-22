import Axios, { AxiosError } from 'axios'
import { authStore } from './store-accessor'

export default function onRejected(err: AxiosError): Promise<any | undefined> {
  if (err.response) {
    const status = err.response.status
    switch (status) {
      case 401: {
        const config = err.config
        if (config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${authStore.getAccessToken}`
        }
        return Axios.request(config)
      }
      case 500:
        alert('サーバー側で異常が発生しました')
        break
    }
  }
  return Promise.reject(err)
}
