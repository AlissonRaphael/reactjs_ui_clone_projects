import styled from 'styled-components'
import { MdExpandMore } from 'react-icons/md'

export const Container = styled.div`
  grid-area: b;
  background-color: var(--secondary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;

  box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.2);
  z-index: 2;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`

export const ExpandIcon = styled(MdExpandMore)`
  height: 28px;
  width: 28px;
  color: var(--white);
  cursor: pointer;
`
