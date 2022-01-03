import type { InjectionKey, Ref } from 'vue'
import type { Emitter } from '@vben-admin/utils'
import { createContext, useContext } from '@vben-admin/use'

export interface SimpleRootMenuContextProps {
  rootMenuEmitter: Emitter
  activeName: Ref<string | number>
}

const key: InjectionKey<SimpleRootMenuContextProps> = Symbol()

export function createSimpleRootMenuContext(
  context: SimpleRootMenuContextProps,
) {
  return createContext<SimpleRootMenuContextProps>(context, key, {
    readonly: false,
    native: true,
  })
}

export function useSimpleRootMenuContext() {
  return useContext<SimpleRootMenuContextProps>(key)
}
