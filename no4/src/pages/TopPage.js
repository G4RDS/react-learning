import React from 'react'

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
  return (
    <div id="container">
      <div className="products">
        <input className="products--search" type="text" placeholder="検索" />

        <ul className="products--list">
          <li className="products--item">
            <h2 className="products--name">Kocone</h2>
            <h3 className="products--title">
              木更津高専生専用　個人授業マッチングアプリ
            </h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopPage
