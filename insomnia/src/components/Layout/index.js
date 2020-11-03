import React, { useState } from 'react'

import { Container } from './styles'

import ActionList from '../ActionsList'
import RequestOptions from '../RequestOptions'
import RequestStatus from '../RequestStatus'

export default function Layout(){
  const [positions, setPositions] = useState({
    one: window.innerWidth/4,
    two: (window.innerWidth/4)*1.5,
    three: (window.innerWidth/4)*1.5,
  })

  return (
    <Container >
      <ActionList positions={positions} />
      <RequestOptions positions={positions} />
      <RequestStatus positions={positions} />
    </Container>
  )
}