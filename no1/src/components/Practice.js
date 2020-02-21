import React from 'react'

const Practice = props => {
  // (2) テキストを変数にしよう
  const title = 'React楽しい'

  return (
    <div>
      {/* (1) テキストを表示しよう */}
      <h2>{title}</h2>

      {/* (3) ボタンが押されたらコンポーネントから渡された関数を呼んで伝えよう */}
      <button onClick={props.onClick}>練習ボタン</button>
    </div>
  )
}

export default Practice
