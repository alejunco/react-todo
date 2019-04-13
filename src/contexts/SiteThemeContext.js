import React from 'react'
import PropTypes from 'prop-types'

import themes from 'themes'

export const SiteThemeContext = React.createContext()

class SiteThemeProvider extends React.Component {
    state = {
      theme: themes.dark,
    }

    handleThemeChange = (themeName) => {
      this.setState({ theme: themes[themeName] })
    }

    render() {
      return (
        <SiteThemeContext.Provider
          value={{
            ...this.state,
            handleSiteThemeChange: this.handleSiteThemeChange,
          }}
        >
          {this.props.children}
        </SiteThemeContext.Provider>
      )
    }
}

SiteThemeProvider.propTypes = {
  children: PropTypes.any,
}

export default SiteThemeProvider
