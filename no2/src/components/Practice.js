import React, { useState } from 'react'

import './Practice.css'

const Practice = props => {
  // (1) useStateでステートを生成

  // (4) useEffectで生成されたことをログに通知

  const incrementCount = () => {
    // (3) ステート更新関数を実行し、ステートの値を１増やす
  }

  return (
    <div id="counter">
      {/* (2) ステート変数を埋め込む */}
      <span></span>

      <button onClick={incrementCount}>増やす</button>
    </div>
  )
}

export default Practice
