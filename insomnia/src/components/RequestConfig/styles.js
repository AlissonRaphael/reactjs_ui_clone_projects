import styled from 'styled-components'

export const Container = styled.div`

`

export const Menu = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--border);

    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 0;
  }
`