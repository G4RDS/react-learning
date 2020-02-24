import React from 'react'

import './TodoItem.css'

const TodoItem = ({ item, onComplete }) => {
  return (
    <li className="todoitem" onClick={onComplete}>
      <div className="todoitem--title">{item.title}</div>
    </li>
  )
}

export default TodoItem
