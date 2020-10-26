import React from 'react'

import { Container } from './styles'

export default function Window({children, heightButton}){
  return (
    <Container distance={heightButton}>
      {children}
    </Container>
  )
}