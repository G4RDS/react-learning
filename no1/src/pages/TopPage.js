import React from 'react'

import './TopPage.css'

import Title from '../components/Title'
import Button from '../components/Button'

function TopPage() {
  return (
    <div id="container">
      <Title />
      <Button text="ボタン" color="#3b7efa" />
    </div>
  )
}

export default TopPage
