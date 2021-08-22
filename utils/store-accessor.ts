/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MyModule from '~/store/mymodule'

let mymoduleStore: MyModule

function initialiseStores(store: Store<any>): void {
  mymoduleStore = getModule(MyModule, store)
}

export { initialiseStores, mymoduleStore }
