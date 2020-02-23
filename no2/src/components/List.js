import React from 'react'

import './List.css'

const List = props => {
  const data = [
    { name: 'Yuki', grade: 5 },
    { name: 'Hiromasa', grade: 6 },
    { name: 'Takumi', grade: 7 },
  ]

  return <ul>{/* (1) dataをmapして、三つのliを作りましょう */}</ul>
}

export default List
