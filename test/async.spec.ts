import { mount } from '@vue/test-utils'
import { createStore } from '~/.nuxt/store'
import { initialiseStores } from '~/utils/store-accessor'
import async from '@/pages/async.vue'
describe('async page', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('async', () => {
    test('async page', async () => {
      const wrapper = mount(async)
      const nameElement = wrapper.find('div.name').element
      const data = await (wrapper as any).vm.fetch()
      wrapper.vm.$data.value = data
      wrapper.vm.$nextTick(() => {
        expect(nameElement.innerHTML).toBe('admin')
      })
    })
  })
})