import React from 'react'

import './Button.css'

const Button = props => {
  return (
    <button
      className="button"
      style={{ backgroundColor: props.bgColor, color: props.color }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
