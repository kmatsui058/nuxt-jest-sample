import { createStore } from '~/.nuxt/store'
import { initialiseStores, mymoduleStore } from '~/utils/store-accessor'
describe('mymodule store', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('mutations', () => {
    test('２追加して４になる', () => {
      mymoduleStore.incrWheels(2)
      expect(mymoduleStore.axles).toBe(2)
    })
    test('初期値に戻ってるか確認', () => {
      expect(mymoduleStore.axles).toBe(1)
    })
  })
})
