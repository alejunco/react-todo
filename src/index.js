import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css' // Normalize styles for different browsers

import App from 'components/App'
import SiteThemeProvider from 'contexts/SiteThemeContext'
import TodosProvider from 'contexts/TodosContext'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <SiteThemeProvider>
    <TodosProvider>
      <App />
    </TodosProvider>
  </SiteThemeProvider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
