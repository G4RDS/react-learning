import React, { useState } from 'react'

import './TopPage.css'

function TopPage() {
  const [input, setInput] = useState({
    name: '',
    age: '20',
    univ: '',
    subject: '',
    grade: '5',
  })

  const onValueChange = (e, prop) => {
    const newInput = { ...input }

    newInput[prop] = e.target.value

    setInput(newInput)
  }

  const onSubmit = e => {
    // これを実行しないと、ブラウザがフォームのターゲットに送信しようとページ遷移してしまう
    // Reactでフォームやボタン系イベントを捉えるときは、必ず実行する
    e.preventDefault()

    console.log('submit', input)
  }

  return (
    <div id="container">
      <form className="form" onSubmit={onSubmit}>
        <h1 className="form--title">高専生用登録フォーム</h1>

        <h3 className="form--label">名前</h3>
        <input
          className="form--input"
          type="text"
          value={input.name}
          onChange={e => onValueChange(e, 'name')}
        />

        <h3 className="form--label">年齢</h3>
        <input
          className="form--input"
          type="number"
          value={input.age}
          onChange={e => onValueChange(e, 'age')}
        />
        <span className="form--unit">才</span>

        <h3 className="form--label">高専名</h3>
        <input
          className="form--input"
          type="text"
          value={input.univ}
          onChange={e => onValueChange(e, 'univ')}
        />

        <h3 className="form--label">学科名</h3>
        <input
          className="form--input"
          type="text"
          value={input.subject}
          onChange={e => onValueChange(e, 'subject')}
        />

        <h3 className="form--label">学年</h3>
        <input
          className="form--input"
          type="text"
          value={input.grade}
          onChange={e => onValueChange(e, 'grade')}
        />
        <span className="form--unit">年</span>

        <button className="form--submit" type="submit">
          送信
        </button>
      </form>
    </div>
  )
}

export default TopPage
