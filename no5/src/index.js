import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './redux/reducer'
import './index.css'

import TopPage from './pages/TopPage'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Index = () => {
  return (
    <Provider store={store}>
      <TopPage />
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
