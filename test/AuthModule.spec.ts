import { createStore } from '~/.nuxt/store'
import { initialiseStores, authStore } from '~/utils/store-accessor'
describe('auth store', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('actions', () => {
    test('fetch myself', async () => {
      await authStore.fetchSelf()
      expect(authStore.getSelf?.mailAddress).toBe('eguchi@nulab.example')
    })
  })
})
