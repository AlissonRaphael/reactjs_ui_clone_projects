import React from 'react'

import { Container, Role, User } from './styles'

import Avatar from '../Avatar'

function UserRow({ nickname, isBot, isOn, color }){
  return (
    <User>
      <Avatar isBot={isBot} isOn={isOn} color={color}/>
      <p>{nickname}</p>
      {isBot && <span>Bot</span>}
    </User>
  )
}

export default function UserList(){
  return (
    <Container>
      <Role>Disponível—2</Role>
      <UserRow nickname="Alisson Oliveira" color="steelBlue" isOn/>
      <UserRow nickname="Talessa Marina" color="hotPink" isOn/>

      <Role>Offline</Role>
      <UserRow nickname="MizaChannel" color="tomato" />
      <UserRow nickname="C3PO" isBot/>
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" isBot/>
      <UserRow nickname="Fulano" isBot/>
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
    </Container>
  )
}
