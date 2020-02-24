import React from 'react'

import './TopPage.css'

import Practice from '../components/Practice'
import List from '../components/List'

const TopPage = props => {
  return (
    <div id="container">
      <Practice />
      <List />
    </div>
  )
}

export default TopPage
