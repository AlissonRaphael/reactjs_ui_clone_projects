import React from 'react'

import { Container } from './styles'
import Lock from '../../assets/body.png'

export default function Body(){
  return (
    <Container>
      <img src={Lock}/>
      <p>Select a body type from above</p>
    </Container>
  )
}