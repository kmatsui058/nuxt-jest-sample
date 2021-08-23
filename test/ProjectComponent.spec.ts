import { mount } from '@vue/test-utils'
import { createStore } from '~/.nuxt/store'
import { authStore, initialiseStores } from '~/utils/store-accessor'
import Projects from '@/components/ProjectsComponent.vue'
describe('projects component', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('projects', () => {
    test('mount test', async () => {
      await authStore.fetchSelf()
      const wrapper = mount(Projects, {
        mocks: {
          $nuxt: {
            context: {},
          },
        },
      })
      await (wrapper.vm as any).fetch()
      const nameElement = wrapper.find('div.name').element
      expect(nameElement.innerHTML).toBe('admin')
      const projectNameElement = wrapper.find('div.project-name').element
      expect(projectNameElement.innerHTML).toBe('テストプロジェクト')
    })
  })
})
