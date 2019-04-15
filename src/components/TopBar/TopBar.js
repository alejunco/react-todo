import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScheduleOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'

import { TodosContext } from 'contexts/TodosContext'

const StyledTopBar = styled.div`
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
  justify-content:space-between;
  max-width: 640px;
  margin: auto;
  padding: 0 10px;
  height: 100%;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const Stats = styled.div`

`

function TopBar() {
  const { stats } = useContext(TodosContext)
  return (
    <StyledTopBar>
      <InnerBar>
        <Logo>
          <AntdIcon width={'1.6em'} height={'1.6em'} type={ScheduleOutline} />
          <h3 style={{ paddingLeft: '10px', transform: 'skew(10deg, -2deg)' }}>two-Do</h3>
        </Logo>
        <Stats>
          <h5>{`Total Pending: ${stats.total - stats.completed}`}</h5>
        </Stats>
      </InnerBar>
    </StyledTopBar>
  )
}

export default TopBar
