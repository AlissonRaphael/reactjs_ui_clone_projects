import styled from 'styled-components'
import { ResizableBox } from 'react-resizable'
import { MdArrowDropDown } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const Container = styled(ResizableBox).attrs({
  resizeHandles: ['e'],
  axis: 'x'
})`

  display: grid;
  grid-template-rows: 47px 1fr;
`

export const FirstSection = styled.section`
  display: flex;
  max-height: 47px;
  background-color: var(--secondary-header);
  border: 1px solid var(--white-border);
  border-left: none;

  input {
    color: var(--text-color-to-light);
    background-color: transparent;
    border: none;
    width: 100%;
  }
`

export const ButtonLink = styled(NavLink)`
  border: none;
  background-color: transparent;

  width: 100px;
  height: 100%;
  font-size: 13px;
  color: var(--text-color-to-light);
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0,0,0,0.08);
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;

  width: 100px;
  height: 100%;
  font-size: 13px;
  color: var(--text-color-to-light);
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0,0,0,0.08);
  }
`

export const MoreIcon = styled(MdArrowDropDown)`
  width: 20px;
  height: 20px;
`

export const SecondSection = styled.section`
  border-right: 1px solid var(--border);
`