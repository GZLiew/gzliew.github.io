import create from 'zustand'
import { pipe } from 'ramda'
import { devtools, persist } from 'zustand/middleware'

import { logger } from '../middlewares/logger'
import { immerProduce } from '../middlewares/immerProduce'

export const createStore = pipe(logger, devtools, immerProduce, create)
export const createPersistStore = pipe(persist, logger, devtools, immerProduce, create)

export const createReduxStore = <S extends Record<string | number | symbol, unknown>, A>(
  initialState: S,
  reducer: (s: S, a: A) => S,
  persistConfig?: Parameters<typeof persist>[0]
) => {
  if (persistConfig) {
    return createPersistStore<S & { dispatch: (args: A) => void }>(
      (set) => ({
        ...initialState,
        dispatch: (args) => set((state) => reducer(state, args) as S & { dispatch: (args: A) => void })
      }),
      persistConfig
    )
  }
  return createStore<S & { dispatch: (args: A) => void }>((set) => ({
    ...initialState,
    dispatch: (args) => set((state) => reducer(state, args) as S & { dispatch: (args: A) => void })
  }))
}
