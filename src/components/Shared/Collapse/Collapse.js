import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { isFragment } from 'react-is'
import CollapsePanel from './Panel'

function toArray(activeKey) {
  let currentActiveKey = activeKey
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : []
  }
  return currentActiveKey
}

class Collapse extends Component {
  constructor(props) {
    super(props)

    const { defaultActiveKey } = props
    const currentActiveKey = defaultActiveKey

    this.state = {
      activeKey: toArray(currentActiveKey),
    }
  }

  onClickItem = (key) => {
    let activeKey = this.state.activeKey
    if (this.props.accordion) {
      activeKey = activeKey[0] === key ? [] : [key]
    } else {
      activeKey = [...activeKey]
      const index = activeKey.indexOf(key)
      const isActive = index > -1
      if (isActive) {
        activeKey.splice(index, 1)
      } else {
        activeKey.push(key)
      }
    }
    this.setActiveKey(activeKey)
  }

  getNewChild = (child, index) => {
    if (!child) return null

    const activeKey = this.state.activeKey
    const { accordion } = this.props

    // Use the panel index as default key
    const key = child.key || String(index)
    const { header, disabled } = child.props
    let isActive = false
    if (accordion) {
      isActive = activeKey[0] === key
    } else {
      isActive = activeKey.indexOf(key) > -1
    }

    const props = {
      panelKey:    key,
      header,
      isActive,
      accordion,
      children:    child.props.children,
      onItemClick: disabled ? null : this.onClickItem,
    }

    return React.cloneElement(child, props)
  }

  getItems = () => {
    const { children } = this.props
    const childList = isFragment(children) ? children.props.children : children
    const newChildren = Children.map(childList, this.getNewChild)

    if (isFragment(children)) {
      return (
        <React.Fragment>
          {newChildren}
        </React.Fragment>
      )
    }

    return newChildren
  }

  setActiveKey = (activeKey) => {
    this.setState({ activeKey })
    this.props.onChange(this.props.accordion ? activeKey[0] : activeKey)
  }

  render() {
    const { style, accordion } = this.props
    return (
      <div style={style} role={accordion ? 'tablist' : null}>
        {this.getItems()}
      </div>
    )
  }
}

Collapse.propTypes = {
  children:         PropTypes.any,
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange:  PropTypes.func,
  accordion: PropTypes.bool,
  style:     PropTypes.object,
}

Collapse.defaultProps = {
  onChange() {},
  accordion: false,
}

Collapse.Panel = CollapsePanel

export default Collapse
