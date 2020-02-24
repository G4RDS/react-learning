import React from 'react'

import './Button.css'

const Button = props => {
  return (
    <button className="button" style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  )
}

export default Button
