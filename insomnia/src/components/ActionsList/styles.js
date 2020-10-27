import styled from 'styled-components'
import { MdArrowDropDown, MdAddCircle } from 'react-icons/md'

export const Container = styled.div`
  max-height: 100%;
  max-width: 100%;

  display: grid;
  grid-template-rows: 47px 1fr;

  background-color: var(--background-list);
`

export const FirstSection = styled.div`
  padding: 0 14px;
  color: white;
  background-color: var( --primary-header);
  font-size: 18px;
  display: flex;
  align-items: center;
  max-width: 100%;
  max-height: 47px;
  color: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  border-right: 1px solid var(--white-border);
`

export const SecondSection = styled.div`
  max-height: calc(100vh - 47px);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
`

export const FirstDivision = styled.div`
  padding: 6px 6px 0 6px;
  display: flex;
  flex-direction: row;
`

export const SecondDivision = styled.div`
  padding: 6px 6px 0 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LastDivision = styled.div`
  padding: 6px 6px 0 6px;
  display: flex;
  flex-direction: column;
`


export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  svg {
    width: 26px;
    height: 26px;
  }

  &.simple {
    font-size: 12px;
    flex: 1;
    height: 24px;
    color: var(--input-color);
    border-radius: 14px;
    white-space: nowrap;
    cursor: pointer;
    justify-content: center;

    svg {
      width: 21px;
      height: 21px;
    }

    &:hover {
      background-color: var(--hoover-color);
    }
  }
`

export const RefButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const ButtonAdd = styled.div`
  padding: 4px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 4px;
  margin-left: 4px;

  &:hover {
    background-color: var(--hoover-color);
  }
`

export const MoreIcon = styled(MdArrowDropDown)`
  width: 20px;
  height: 20px;
`

export const AddIcon = styled(MdAddCircle)`
  color: white;
  width: 14px;
  height: 14px;
`

export const Input = styled.input`
  width: 1005;
  background-color: transparent;
  padding: 6px 4px;
  border: 1px solid var(--border);
  border-radius: 4px;
  color: #fff;

  ::placeholder {
    font-size: 12px;
    color: var(--border);
  }

`