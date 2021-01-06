import { createReduxStore } from './createStore'

type Action = { type: 'SET_HEIGHT'; height: number }

const initialState = {
  headerHeight: 0
}

const reducer = (state = initialState, { type, height = 0 }: Action) => {
  switch (type) {
    case 'SET_HEIGHT':
      state.headerHeight = height
      return
    default:
      return state
  }
}

export const useHeaderHeight = createReduxStore<typeof initialState, Action>(initialState, reducer)
