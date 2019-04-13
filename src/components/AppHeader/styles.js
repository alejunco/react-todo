import styled from 'styled-components'

const styles = {
  AppHeader: styled.div`
    text-align: center;
    height: 12rem;
    padding: 1rem;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.primary};
  `,
}

export default styles
