import React from 'react'

import Avatar from '../Avatar'

import {
  Container,
  Profile,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon } from './styles'

export default function UserInfo(){
  return (
    <Container>
      <Profile>
        <Avatar color="steelBlue" isOn/>
        <UserData>
          <strong>Alisson Oliveira</strong>
          <span>#4091</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  )
}