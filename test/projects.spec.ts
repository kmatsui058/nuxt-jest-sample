import { mount } from '@vue/test-utils'
import { createStore } from '~/.nuxt/store'
import { initialiseStores } from '~/utils/store-accessor'
import projects from '@/pages/projects.vue'
import ProjectsComponent from '~/components/ProjectsComponent.vue'

describe('projects page', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })
  describe('projects', () => {
    test('親も子供もfetchしてるテスト', async () => {
      const wrapper = mount(projects, {
        mocks: {
          $nuxt: {
            context: {},
          },
        },
      })
      const nameElement = wrapper.find('div.name').element
      await (wrapper.vm as any).fetch()
      const projectComponent = wrapper.findComponent(ProjectsComponent)
      await (projectComponent.vm as any).fetch()
      const projectNameElement =
        projectComponent.find('div.project-name').element
      expect(projectNameElement.innerHTML).toBe('テストプロジェクト')
      expect(nameElement.innerHTML).toBe('admin')
    })
  })
})
