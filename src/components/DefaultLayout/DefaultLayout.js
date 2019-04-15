import React from 'react'
import styled from 'styled-components'
import { ScheduleOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'components/Routes'

const TopBar = styled.div`
    width:100%;
    background-color:${({ theme }) => theme.backgroundColor};
    height:43px;
    top: 0;
    position: fixed;
    z-index: 200;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
`

const InnerBar = styled.div`
    display: flex;
    align-items: center;
    max-width: 640px;
    margin: auto;
    height: 100%;
`

const AppHolder = styled.div`
    max-width: 640px;
    margin: auto;
    animation-name: effect-fade-in;
    animation-duration: 120ms;
`

const Content = styled.div`
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
      <TopBar>
        <InnerBar>
          <AntdIcon width={'1.6em'} height={'1.6em'} type={ScheduleOutline} />
          <h3 style={{ paddingLeft: '10px', transform: 'skew(10deg, -2deg)' }}>two-Do</h3>
        </InnerBar>
      </TopBar>
      <AppHolder>
        <Content>
          <Routes />
        </Content>
      </AppHolder>
    </Router>
  )
}

export default DefaultLayout
