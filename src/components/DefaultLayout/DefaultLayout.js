import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'components/Routes'
import Checkbox from 'components/Shared/Checkbox'
import Collapse, { Panel } from 'components/Shared/Collapse'

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
    max-width: 950px;
    margin: auto;
    height: 100%;
`

const AppHolder = styled.div`
    max-width: 950px;
    margin: auto;
    animation-name: effect-fade-in;
    animation-duration: 120ms;
`

const Sidebar = styled.div`
    user-select: none !important;
    float: left;
    width: 255px;
    height: 100%;
    padding-left: 30px;
    padding-top: 50px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
`

const Content = styled.div`
    min-height: 380px;
    padding: 0 20px;
    margin-left: 284px;
    border-right: 1px solid #f1f1f1;
    background-color: #1f1f1f;
    border-color: #1f1f1f;
    padding-top: 80px !important;
    padding-bottom: 85px !important;
`

const FiltersSetion = styled.div`
  padding:10px 8px 20px 8px;
`

function DefaultLayout() {
  return (
    <Router>
      <TopBar>
        <InnerBar />
      </TopBar>
      <AppHolder>
        <Sidebar>
          <Collapse defaultActiveKey={['1', '2']}>
            <Panel header={'Filters'} key={'1'}>
              <FiltersSetion>
                <Checkbox type={'checkbox'} label={'Pending'} />
              </FiltersSetion>
            </Panel>
          </Collapse>
        </Sidebar>
        <Content>
          <Routes />
        </Content>
      </AppHolder>
    </Router>

  )
}

export default DefaultLayout
