export default {
  addItem(title) {
    return {
      type: 'ADD_ITEM',
      title,
    }
  },
}
