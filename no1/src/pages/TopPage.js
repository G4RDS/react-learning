import React from 'react'

import './TopPage.css'

import Title from '../components/Title'
import Button from '../components/Button'

function TopPage() {
  const onButtonClick = () => {
    console.log('ボタンがクリックされました')
  }

  return (
    <div id="container">
      <Title />
      <Button
        text="ボタン"
        bgColor="#3b7efa"
        color="#ffffff"
        onClick={onButtonClick}
      />
      <Button
        text="白黒🐼"
        bgColor="#ffffff"
        color="#222222"
        onClick={onButtonClick}
      />
    </div>
  )
}

export default TopPage
