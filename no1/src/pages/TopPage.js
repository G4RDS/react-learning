import React from 'react'

import './TopPage.css'

import Title from '../components/Title'
import Button from '../components/Button'
import Practice from '../components/Practice'

function TopPage() {
  const onPracticeClicked = () => {
    console.log('練習ボタンがクリックされました。')
  }

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

      {/* (3) ボタンが押されたときに実行したい onPracticeClicked 関数をコンポーネントに渡そう */}
      <Practice onClick={onPracticeClicked} />
    </div>
  )
}

export default TopPage
