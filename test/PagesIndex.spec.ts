import { mount } from '@vue/test-utils'
import { createStore } from '~/.nuxt/store'
import { initialiseStores } from '~/utils/store-accessor'
import index from '@/pages/index.vue'
const store = createStore()
describe('index page', () => {
  beforeEach(() => {
    initialiseStores(store)
  })
  describe('index', () => {
    test('index page', async () => {
      const wrapper = mount(index, {
        mocks: {
          $nuxt: {
            context: {},
          },
          $store: store,
        },
      })
      const nameElement = wrapper.find('div.name').element
      await (wrapper.vm as any).fetch()
      expect(nameElement.innerHTML).toBe('admin')
    })
  })
})
