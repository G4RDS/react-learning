import React, { useState, useEffect } from 'react'

import './Practice.css'

const Practice = props => {
  // (1) useStateでステートを生成
  const [count, setCount] = useState(0)

  // (4) useEffectで生成されたことをログに通知
  useEffect(() => {
    console.log('Component generated')
  })

  const incrementCount = () => {
    // (3) ステート更新関数を実行し、ステートの値を１増やす
    setCount(count + 1)
  }

  return (
    <div id="counter">
      {/* (2) ステート変数を埋め込む */}
      <span>{count}</span>

      <button onClick={incrementCount}>増やす</button>
    </div>
  )
}

export default Practice
