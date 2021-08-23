/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MyModule from '~/store/mymodule'
import AuthModule from '~/store/auth'
import ProjectsModule from '~/store/projects'

let mymoduleStore: MyModule
let authStore: AuthModule
let projectsStore: ProjectsModule

function initialiseStores(store: Store<any>): void {
  mymoduleStore = getModule(MyModule, store)
  authStore = getModule(AuthModule, store)
  projectsStore = getModule(ProjectsModule, store)
}

export { initialiseStores, mymoduleStore, authStore, projectsStore }
