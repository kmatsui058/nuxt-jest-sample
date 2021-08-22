import { createStore } from '~/.nuxt/store'
import { initialiseStores, mymoduleStore } from '~/utils/store-accessor'
describe('mymodule store', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('mutations', () => {
    test('add extra wheels', () => {
      mymoduleStore.incrWheels(2)
      expect(mymoduleStore.axles).toBe(2)
    })
  })
})
