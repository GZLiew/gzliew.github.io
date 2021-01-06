import { StateCreator, State } from 'zustand'

export const logger = <T extends State>(
  config: StateCreator<T, (fn: (draft: T) => Partial<T>) => void>
): StateCreator<T> => (set, get, api) =>
  config(
    (args) => {
      console.log('>>> args', args)
      set(args)
      console.log('>>> new state', get())
    },
    get,
    api
  )
