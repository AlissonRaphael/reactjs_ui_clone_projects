import styled from 'styled-components'
import { MdMic, MdHeadset, MdSettings } from 'react-icons/md'

export const Container = styled.div`
  grid-area: g;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.2);
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  span {
    color: var(--gray);
    font-size: 13px;
  }
`

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg:not(:first-child) {
    margin-left: 5px;
  }

`

export const MicIcon = styled(MdMic)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

export const HeadphoneIcon = styled(MdHeadset)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

export const SettingsIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`
