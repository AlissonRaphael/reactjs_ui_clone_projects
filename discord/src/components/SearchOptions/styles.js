import styled from 'styled-components'
import { MdAdd, MdHelpOutline } from 'react-icons/md'

export const Box = styled.div`
  display: ${(props) => props.expand ? 'flex' : 'none'};
  flex-direction: column;

  padding: 12px 14px;

  width: 310px;

  position: absolute;
  top: 40px;
  right: 16px;

  color: rgba(255,255,255,0.9);
  background-color: var(--primary);
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 2px 3px 7px 1px rgba(0,0,0,0.1);
  border-radius: 3px;
`

export const Role = styled.div`
  padding: 0px 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
`

export const Button = styled.button`
  background-color: transparent;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: 16px;
  }
`

export const HelpIcon = styled(MdHelpOutline)`
  height: 18px;
  width: 18px;
`

export const Options = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  width: 100%;
  border-radius: 3px;

  p span {
    margin-left: 5px;
    color: rgba(255,255,255,0.5);
  }

  svg {
    visibility: hidden;
  }

  &:hover {
    background-color: var(--tertiary);

    svg {
      visibility: visible;
    }
  }
`

export const AddButton = styled(MdAdd)`
  width: 18px;
  height: 18px;
`
