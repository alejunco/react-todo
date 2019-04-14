import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
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
  clippath: inset(50%);
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
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  border: 1px solid grey;
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #de4c4a;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`

const Checkbox = ({
  label, checked, ...props
}) => (
  <CheckboxContainer>
    <CheckBoxLabel>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox={'0 0 24 24'}>
          <polyline points={'20 6 9 17 4 12'} />
        </Icon>
      </StyledCheckbox>
      {label}
    </CheckBoxLabel>
  </CheckboxContainer>
)

export default Checkbox