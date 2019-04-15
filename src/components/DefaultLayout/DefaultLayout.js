import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'components/Routes'
import TopBar from 'components/TopBar'

const Content = styled.div`
    margin: auto;
    max-width: 640px;
    min-height: 380px;
    padding: 0 10px;
    border-right: 1px solid #f1f1f1;
    background-color: #1f1f1f;
    border-color: #1f1f1f;
    padding-top: 80px !important;
    padding-bottom: 85px !important;
`

function DefaultLayout() {
  return (
    <Router>
      <TopBar />
      <Content>
        <Routes />
      </Content>
    </Router>
  )
}

export default DefaultLayout
