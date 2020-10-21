import React from 'react'

import { Container } from './styles'

import ActionList from '../ActionsList'
import Requests from '../Requests/index'

export default function Layout(){
  return (
    <Container>
      <ActionList />
      <Requests />

    </Container>
  )
}