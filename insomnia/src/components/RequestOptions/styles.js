import styled from 'styled-components'
import { MdArrowDropDown } from 'react-icons/md'


export const Container = styled.div`
  display: grid;
  grid-template-rows: 47px 1fr;

  border-right: 1px solid var(--border);
`

export const FirstSection = styled.section`
  display: flex;

  background-color: var(--secondary-header);
  border-bottom: 1px solid var(--border);
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

export const Input = styled.input`
  color: var(--text-color-to-light);
  background-color: transparent;
  border: none;
  width: 100%;
`


export const SecondSection = styled.section`

`