import { mount } from '@vue/test-utils'
import { createStore } from '~/.nuxt/store'
import { initialiseStores } from '~/utils/store-accessor'
import MutationTest from '@/components/MutationTest.vue'

describe('mymodule store', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('mutations', () => {
    test('add extra wheels', () => {
      const wrapper = mount(MutationTest)
      const divElement = wrapper.find('div').element
      expect(divElement.innerHTML).toBe('3')
    })
  })
})
