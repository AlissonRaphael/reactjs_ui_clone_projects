import React from 'react'

import { Container, Role, User, Avatar } from './styles'

function UserRow({ nickname, isBot }){
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

export default function UserList(){
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname="Alisson Oliveira" />
      <UserRow nickname="Talessa Marina" />

      <Role>Offline</Role>
      <UserRow nickname="MizaChannel" />
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
