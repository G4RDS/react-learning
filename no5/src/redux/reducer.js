import produce from 'immer'
import { ActionTypes } from './actions'

const initialState = {
  items: [{ title: 'test' }],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return produce(state, draft => {
        draft.items.push({
          title: action.title,
          isCompleted: false,
        })
      })
    }
    case ActionTypes.COMPLETE_ITEM: {
      return produce(state, draft => {
        draft.items[action.index].isCompleted = true
      })
    }
    default:
      return state
  }
}

export default reducer
