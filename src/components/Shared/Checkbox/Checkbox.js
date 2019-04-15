import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  cursor:pointer;
  display: inline-block;
  vertical-align: middle;
  padding-right: 1em;
`

const CheckBoxLabel = styled.label`
  cursor:pointer
`

const Icon = styled.svg`
  fill: none;
  stroke:#de4c4a;
  stroke-width: 3px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  vertical-align: bottom;
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  border: 1px solid grey;
  border-radius: 3px;
  transition: all 150ms;
  margin-right: ${({ label }) => label ? '1em' : '0'};
  transition-duration: 0.2s;
  transition-property: transform;
  &:hover {
    transform: scale(1.2);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`

function Checkbox({ label, checked, ...props }) {
  return (
    <CheckboxContainer>
      <CheckBoxLabel>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} label={label}>
          <Icon viewBox={'0 0 24 24'}>
            <polyline points={'20 6 9 17 4 12'} />
          </Icon>
        </StyledCheckbox>
        {label}
      </CheckBoxLabel>
    </CheckboxContainer>
  )
}
Checkbox.propTypes = {
  label:   PropTypes.string,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  checked: false,
}

export default Checkbox
