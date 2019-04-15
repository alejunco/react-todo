import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextField = styled.input`
    background-color: transparent !important;
    border: unset;
    color: ${({ theme }) => theme.fontColor};
    cursor: text;
    display: inline-block;
    font-size:14px;
    line-height: 19px;
    line-break:after-white-space;
    overflow-wrap: break-word;
    padding: 6px 6px;
    user-select: text !important;
    word-wrap: break-word;
    word-break: break-word;
    width: 90%;
    &:focus {
        outline-width:0;
    }; 
`

function TextField({ value, onChange, ...props }) {
  return (
    <StyledTextField value={value} onChange={onChange} {...props} />
  )
}

TextField.propTypes = {
  onChange: PropTypes.func,
  value:    PropTypes.string,
}

TextField.defaultProps = {
  onChange() {},
}

export default TextField
