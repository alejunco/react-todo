import React from 'react'
import styled from 'styled-components'
import { ScheduleOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'

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
    max-width: 640px;
    margin: auto;
    height: 100%;
`

function TopBar() {
  return (
    <StyledTopBar>
      <InnerBar>
        <AntdIcon width={'1.6em'} height={'1.6em'} type={ScheduleOutline} />
        <h3 style={{ paddingLeft: '10px', transform: 'skew(10deg, -2deg)' }}>two-Do</h3>
      </InnerBar>
    </StyledTopBar>
  )
}

export default TopBar
