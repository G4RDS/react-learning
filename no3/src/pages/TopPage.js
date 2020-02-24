import React, { useState } from 'react'

import './TopPage.css'

function TopPage() {
  const [name, setName] = useState('')

  const onNameChange = e => {
    setName(e.target.value)
  }

  const onSubmit = e => {
    // これを実行しないと、ブラウザがフォームのターゲットに送信しようとページ遷移してしまう
    // Reactでフォームやボタン系イベントを捉えるときは、必ず実行する
    e.preventDefault()

    console.log('submit', {
      name: name,
    })
  }

  return (
    <div id="container">
      <form className="form" onSubmit={onSubmit}>
        <h1 className="form--title">高専生用登録フォーム</h1>

        <h3 className="form--label">名前</h3>
        <input
          className="form--input"
          type="text"
          value={name}
          onChange={onNameChange}
        />
      </form>
    </div>
  )
}

export default TopPage
