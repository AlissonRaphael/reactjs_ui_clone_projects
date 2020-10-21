import styled from 'styled-components'
import { MdArrowDropDown } from 'react-icons/md'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: var(--input-color);
  padding: 8px 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    background-color: rgba(255,255,255, 0.2);
  }

  &.active {
    z-index: 1;
    color: #fff;
    border-bottom: 1px solid var(--background);
    border-right: 1px solid var(--border);
    border-left: 1px solid var(--border);

    &:first-child {
      border-left: none;
    }
  }
`

export const MoreIcon = styled(MdArrowDropDown)`
  width: 20px;
  height: 20px;
`