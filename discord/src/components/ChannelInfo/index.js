import React from 'react'

import { Container, HashtagIcon, Title, Separator, Description } from './styles'

export default function ChannelInfo(){
  return (
    <Container>
      <HashtagIcon/>

      <Title>chat-livre</Title>

      <Separator/>

      <Description>Canal aberto para conversas</Description>
    </Container>
  )
}