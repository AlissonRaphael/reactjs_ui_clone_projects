import styled from 'styled-components'
import { HiHashtag } from 'react-icons/hi'
import { MdPersonAdd, MdSettings } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  transition: all 0.2s;

  div {
    display: flex;
    align-items: center;
  }

  div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);

    div span {
      color: var(--white);
    }
  }

`

export const HashtagIcon = styled(HiHashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);

`

export const InviteIcon = styled(MdPersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`

export const SettingsIcon = styled(MdSettings)`
  margin-left: 4px;

  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`
