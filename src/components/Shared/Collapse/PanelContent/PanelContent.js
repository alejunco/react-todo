import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {
  Content: styled.div`
    min-height: 0px;
    height: auto;
    max-height: ${(props) => props.isActive ? '800px' : '0px'};
    overflow: ${(props) => props.isActive ? 'visible' : 'hidden'};
    transition: max-height 400ms cubic-bezier(0.4,0,0.2,1) 0ms;
`,
}
function PanelContent(props) {
  const {
    isActive, children, role,
  } = props

  const child = !isActive ? null : <div>{children}</div>
  return (
    <Styled.Content isActive={isActive} role={role}>{child}</Styled.Content>
  )
}

PanelContent.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.any,
  role:     PropTypes.string,
}

export default PanelContent
