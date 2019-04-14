import React from 'react'
import ReactDOM from 'react-dom'
import SiteThemeProvider from 'contexts/SiteThemeContext'
import TodosProvider from 'contexts/TodosContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <SiteThemeProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </SiteThemeProvider>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})
