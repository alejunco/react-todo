import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import SiteThemeProvider, { SiteThemeContext } from 'contexts/SiteThemeContext'
import TodosProvider from 'contexts/TodosContext'
import AppHeader from 'components/AppHeader'
import TodoPage from 'components/TodoPage'

import GlobalStyle from 'themes/globalStyles'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <SiteThemeProvider>
        <TodosProvider>
          <SiteThemeContext.Consumer>
            {({ theme }) => (
              <ThemeProvider theme={theme}>
                <React.Fragment>
                  <GlobalStyle />
                  <AppHeader />
                  <TodoPage />
                </React.Fragment>
              </ThemeProvider>
            )}
          </SiteThemeContext.Consumer>
        </TodosProvider>
      </SiteThemeProvider>
    )
  }
}

export default App
