import React from 'react'

import { Container } from './styles'
import Lock from '../../assets/auth.png'

export default function Auth(){
  return (
    <Container>
      <img src={Lock}/>
      <p>Select an auth type from above</p>
    </Container>
  )
}