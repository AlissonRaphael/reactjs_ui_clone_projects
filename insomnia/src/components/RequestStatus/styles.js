import styled from 'styled-components'
import { MdArrowDropDown } from 'react-icons/md'


export const Container = styled.div`
  display: grid;
  grid-template-rows: 47px 1fr;

  border-right: 1px solid var(--border);
`

export const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;

  background-color: var(--secondary-header);
  border-bottom: 1px solid var(--border);

  div {
    display: flex;
    padding: 10px 15px;
  }
`

export const Box = styled.div`
  margin-right: 6px;
  padding: 2px;
  font-size: 13px;
  border: 1px solid rbga(0,0,0,0.3);

  color: ${(props) => props.color ? '#fff' : 'var(--text-color-to-light)' };
  background-color: ${(props) => props.color ? props.color : 'rrbga(0,0,0,0.5)' };
`

export const Button = styled.button`
  border: none;
  background-color: transparent;

  width: 120px;
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

`