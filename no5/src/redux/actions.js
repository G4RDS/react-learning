export const ActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  COMPLETE_ITEM: 'COMPLETE_ITEM',
}

export default {
  addItem(title) {
    return {
      type: ActionTypes.ADD_ITEM,
      title,
    }
  },
  completeItem(index) {
    return {
      type: ActionTypes.COMPLETE_ITEM,
      index,
    }
  },
}
