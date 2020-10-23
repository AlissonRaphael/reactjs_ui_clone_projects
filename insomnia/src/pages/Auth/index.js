import React from 'react'

import { Container, LockOpen } from './styles'

export default function Body(){
  return (
    <Container>
      <LockOpen/>
      <p>Select an auth type from above</p>
    </Container>
  )
}