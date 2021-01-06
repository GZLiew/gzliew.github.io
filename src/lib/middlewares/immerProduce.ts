import { State, StateCreator } from 'zustand'
import produce from 'immer'

export const immerProduce = <T extends State>(
  config: StateCreator<T, (fn: (draft: T) => Partial<T>) => void>
): StateCreator<T> => (set, get, api) =>
  config(
    (fn) => {
      set(produce(fn) as (state: T) => Partial<T>)
    },
    get,
    api
  )
