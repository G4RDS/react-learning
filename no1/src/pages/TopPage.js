import React from 'react'

import './TopPage.css'

import Title from '../components/Title'
import Button from '../components/Button'
import Practice from '../components/Practice'

function TopPage() {
  const onPracticeClicked = () => {
    console.log('練習ボタンがクリックされました。')
  }

  return (
    <div id="container">
      <Title />
      <Button text="ボタン" color="#3b7efa" />

      {/* (2) ボタンが押されたときに実行したい onPracticeClicked 関数をコンポーネントに渡そう */}
      <Practice />
    </div>
  )
}

export default TopPage
