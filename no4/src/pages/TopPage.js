import React, { useState } from 'react'

import './TopPage.css'

const data = [
  {
    name: 'Kocone',
    title: '木更津高専生専用　個人授業マッチングアプリ',
  },
  {
    name: 'YouRest',
    title: '木更津高専学寮　届け出管理システム',
  },
  {
    name: 'Delivery Control',
    title: '木更津高専学寮　配送管理システム',
  },
  {
    name: 'How are you?',
    title: '木更津高専　欠席通知システム',
  },
]

function TopPage() {
  const [search, setSearch] = useState('')

  const onSearchChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div id="container">
      <div className="products">
        <input
          className="products--search"
          type="text"
          placeholder="検索"
          value={search}
          onChange={onSearchChange}
        />

        <ul className="products--list">
          {data
            .filter(
              p => p.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
            )
            .map(p => (
              <li className="products--item" key={p.name}>
                <h2 className="products--name">{p.name}</h2>
                <h3 className="products--title">{p.title}</h3>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TopPage
