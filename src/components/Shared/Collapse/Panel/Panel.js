/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RightOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'
import PanelContent from '../PanelContent'

const IconContainer = styled.span`
  display: inline-block;
  transform:${(props) => props.isActive ? 'rotateZ(90deg)' : null};
  transition: transform .15s cubic-bezier(0.65, 0.05, 0.36, 1);  
`
const PanelHeader = styled.span`
  margin-left:1em;
`

class CollapsePanel extends Component {
  handleItemClick = () => {
    const { onItemClick, panelKey } = this.props

    if (typeof onItemClick === 'function') {
      onItemClick(panelKey)
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick()
    }
  }

  render() {
    const {
      panelKey,
      header,
      children,
      isActive,
      accordion,
    } = this.props

    return (
      <div id={panelKey}>
        <div
          onClick={this.handleItemClick}
          role={accordion ? 'tab' : 'button'}
          data-testid={`panel-button-${panelKey}`}
          // eslint-disable-next-line jsx-a11y/aria-proptypes
          aria-expanded={`${isActive}`}
          onKeyPress={this.handleKeyPress}
        >
          <IconContainer isActive={isActive}><AntdIcon type={RightOutline} /></IconContainer>
          <PanelHeader>{header}</PanelHeader>
        </div>
        <PanelContent
          isActive={isActive}
          role={accordion ? 'tabpanel' : null}
        >
          {children}
        </PanelContent>
      </div>
    )
  }
}

CollapsePanel.propTypes = {
  children: PropTypes.any,
  header:   PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  isActive:    PropTypes.bool,
  onItemClick: PropTypes.func,
  accordion:   PropTypes.bool,
  panelKey:    PropTypes.any,
}

CollapsePanel.defaultProps = {
  isActive: false,
  onItemClick() { },
}

export default CollapsePanel
