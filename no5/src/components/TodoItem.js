import React from 'react'

import './TodoItem.css'

const TodoItem = ({ item }) => {
  return (
    <li className="todoitem">
      <div className="todoitem--title">{item.title}</div>
    </li>
  )
}

export default TodoItem
