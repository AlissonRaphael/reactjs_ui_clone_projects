import styled from 'styled-components'
import { HiHashtag, HiBell } from 'react-icons/hi'
import { RiPushpinFill } from 'react-icons/ri'
import { FiUsers, FiSearch } from 'react-icons/fi'
import { MdInbox, MdHelp } from 'react-icons/md'

export const Container = styled.div`
  grid-area: c;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;
  background-color: var(--primary);

  box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.2);
  z-index: 2;

  div {
    display: flex;
    align-items: center;
  }
`

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
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

export const HashtagIcon = styled(HiHashtag)`
  height: 26px;
  width: 26px;
  color: var(--symbol);
`

export const BellIcon = styled(HiBell)`
  height: 22px;
  width: 22px;
`

export const PushpinIcon = styled(RiPushpinFill)`
  height: 22px;
  width: 22px;
`

export const UserIcon = styled(FiUsers)`
  height: 22px;
  width: 22px;
`

export const Form = styled.form`
  width: ${(props) => props.expand ? '230px' : '150px'};
  padding: 3px 5px;
  margin-left: 14px;
  background-color: var(--tertiary);
  border-radius: 4px;

  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  background-color: var(--tertiary);
  color: var(--white);

  &::placeholder {
    color: var(--gray);
  }
`

export const SearchIcon = styled(FiSearch)`
  height: 14px;
  width: 14px;
`

export const InboxIcon = styled(MdInbox)`
  height: 22px;
  width: 22px;
`

export const HelpIcon = styled(MdHelp)`
  height: 22px;
  width: 22px;
`
