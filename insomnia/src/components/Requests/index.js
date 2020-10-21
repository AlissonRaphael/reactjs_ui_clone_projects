import React from 'react'

import { Container } from './style'

import RequestOptions from '../RequestOptions'
import RequestStatus from '../RequestStatus'

export default function Resquest(){
  return (
    <Container>
      <RequestOptions />
      <RequestStatus />
    </Container>
  )
}