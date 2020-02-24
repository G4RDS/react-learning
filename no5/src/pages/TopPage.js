import React, { useState } from 'react'
import { connect } from 'react-redux'

import Actions from '../redux/actions'
import './TopPage.css'

import TodoItem from '../components/TodoItem'

const TopPage = ({ items, addItem }) => {
  const [input, setInput] = useState('')

  // 追加フォームのinputが変更されたときに呼ばれるリスナー
  const onInputChange = e => {
    setInput(e.target.value)
  }

  // 追加フォームがサブミットされたときに呼ばれるリスナー
  const onAddItem = e => {
    e.preventDefault()

    // Redux Reducerにアイテムを追加するよう指示
    addItem(input)

    // 入力内容を初期化
    setInput('')
  }

  return (
    <div id="container">
      <div className="todolist">
        <h1 className="todolist--title">Todo List</h1>

        <ul className="todolist--list">
          {items.map((item, ind) => (
            <TodoItem item={item} key={ind} />
          ))}
        </ul>

        <form className="todolist--add" onSubmit={onAddItem}>
          <input
            className="todolist--input"
            type="text"
            value={input}
            onChange={onInputChange}
          />
          <button type="submit" className="todolist--btn">
            追加
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    items: state.items,
  }),
  dispatch => ({
    addItem(title) {
      dispatch(Actions.addItem(title))
    },
  })
)(TopPage)
