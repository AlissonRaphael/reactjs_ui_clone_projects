import styled from 'styled-components'
import { MdSettings } from 'react-icons/md'

export const Container = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const FirstSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }
`
export const SecondSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const SettingIcon = styled(MdSettings)`
  color: var(--input-color);
  width: 16px;
  height: 16px;
`

export const Input = styled.input`
  background-color: transparent;
  padding: 6px 4px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid var(--border);
  color: #fff;

  ::placeholder {
    font-size: 12px;
    color: var(--border);
  }
`

export const Button = styled.button`
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-left: 6px;
  padding: 7px 14px;
  background-color: transparent;
  color: var(--input-color);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255,255,255,0.03);
  }
`
