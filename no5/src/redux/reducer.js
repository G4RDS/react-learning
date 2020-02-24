import produce from 'immer'

const initialState = {
  items: [{ title: 'test' }],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return produce(state, draft => {
        draft.items.push({
          title: action.title,
          isCompleted: false,
        })
      })
    }
    default:
      return state
  }
}

export default reducer
