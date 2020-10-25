import styled from 'styled-components'
import { MdArrowDropDown } from 'react-icons/md'
import { BsArrowRepeat } from 'react-icons/bs'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 47px 1fr;
  position: relative;
`

export const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;

  background-color: var(--secondary-header);
  border: 1px solid var(--white-border);
  border-left: none;

  .boxes {
    display: flex;
    padding: 10px 15px;
  }
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color-to-dark);
  background-color: rgba(0,0,0,0.7);

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
`

export const Spinner = styled(BsArrowRepeat)`
  margin-top: 18px;
  width: 80px;
  height: 80px;
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const AbortButton = styled.div`
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-top: 20px;
  padding: 7px 14px;
  background-color: transparent;
  color: var(--input-color);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255,255,255,0.03);
  }
`


export const Box = styled.div`
  margin-right: 14px;
  padding: 4px 8px;
  font-size: 14px;
  border: 1px solid var(--box-border);

  color: ${(props) => props.status ? '#fff' : 'var(--text-color-to-light)' };
  background-color: ${(props) => {
    if(!props.status) return 'var(--box)'
    if(props.status === 'OK') return 'var(--success)'
    if(props.status === 'FAILED') return 'var(--failed)'
    if(props.status === 'Not Found') return 'var(--error)'
  }};
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