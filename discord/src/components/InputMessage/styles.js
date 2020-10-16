import styled from 'styled-components'
import { MdAddCircle, MdInsertEmoticon } from 'react-icons/md'
import { FaGift } from 'react-icons/fa'
import { AiOutlineGif } from 'react-icons/ai'

export const Container = styled.div`
  width: 100%;
  height: 68px;
  padding: 0px 16px;

  div {
    white-space: nowrap;
  }
`

export const Form = styled.form`
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border-radius: 7px;
  background-color: var(--chat-input);

  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const Input = styled.input`
  width: 100%;
  padding: 0px 10px;
  color: var(--white);
  background-color: var(--chat-input);

  &::placeholder {
    color: var(--gray);
  }
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
    margin-left: 14px;
  }
`

export const AddIcon = styled(MdAddCircle)`
  width: 24px;
  height: 24px;
`

export const PresentIcon = styled(FaGift)`
  width: 24px;
  height: 24px;
`

export const GifIcon = styled(AiOutlineGif)`
  width: 26px;
  height: 23px;
  padding: 0 3px;
  background-color: var(--white);
  color: var(--chat-input);
  border-radius: 2px;
`

export const EmoticonIcon = styled(MdInsertEmoticon)`
  width: 24px;
  height: 24px;
`