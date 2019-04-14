import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { SiteThemeContext } from 'contexts/SiteThemeContext'

import DefaultLayout from 'components/DefaultLayout'

import GlobalStyle from 'themes/globalStyles'

function App() {
  const { theme } = useContext(SiteThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <DefaultLayout />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
