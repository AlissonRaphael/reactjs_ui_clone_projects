import React from 'react'

import { Container, Separator } from './styles'
import ServerButton from '../ServerButton'

export default function ServerList(){
  return (
    <Container>
      <ServerButton isHome/>

      <Separator/>

      <ServerButton/>
      <ServerButton hasNotifications />
      <ServerButton mentions={4} />
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={21}/>
      <ServerButton/>
    </Container>
  )
}