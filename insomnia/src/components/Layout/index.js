import React from 'react'

import { Container } from './styles'

import ActionList from '../ActionsList'
import Requests from '../Requests'

export default function Layout(){
  return (
    <Container>
      <ActionList />
      <Requests />

    </Container>
  )
}