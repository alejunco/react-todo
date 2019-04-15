import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SiteThemeContext } from 'contexts/SiteThemeContext'

const StyledButtom = styled.button`
    background: 0;
    background-color: ${({ accent, variant }) => variant === 'filled' ? accent : ''};
    border: ${({ accent, variant }) => `1px solid ${variant === 'outlined' ? accent : 'transparent'}`};
    border-radius: 3px !important;
    color: #fff !important;
    cursor:pointer;
    display: inline-block;
    font-size: 13px !important;
    font-weight: bold;
    line-height: 17px;
    margin: 1px;
    padding: 6px 12px 7px 12px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    white-space: nowrap;
    transition-duration: 0.1s;
    transition-property: transform;
    &:hover {
        text-decoration: ${({ variant }) => variant === 'link' ? 'underline' : ''};
        transform:scale(1.05)
    };
    &:active {
        border-color: #202020 !important;
    };
    &:focus {
        outline-width:0;
    };
`

const ButtonContent = styled.span`
  display: flex;
`

function Button({
  children,
  variant,
  accent,
  ...props
}) {
  const { theme } = useContext(SiteThemeContext)
  let color = theme.primary
  if (accent) {
    if (accent === 'secondary' || accent === 'primary') {
      color = theme[accent]
    } else {
      color = accent
    }
  }
  return (
    <StyledButtom variant={variant} accent={color} {...props}>
      <ButtonContent>{children}</ButtonContent>
    </StyledButtom>
  )
}


Button.propTypes = {
  children: PropTypes.any,
  variant:  PropTypes.oneOf(['filled', 'outlined', 'link']),
  accent:   PropTypes.string,
}

Button.defaultProps = {
  variant: 'filled',
}

export default Button
