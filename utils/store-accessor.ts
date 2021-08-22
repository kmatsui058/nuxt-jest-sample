/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MyModule from '~/store/mymodule'
import AuthModule from '~/store/auth'

let mymoduleStore: MyModule
let authStore: AuthModule

function initialiseStores(store: Store<any>): void {
  mymoduleStore = getModule(MyModule, store)
  authStore = getModule(AuthModule, store)
}

export { initialiseStores, mymoduleStore, authStore }
