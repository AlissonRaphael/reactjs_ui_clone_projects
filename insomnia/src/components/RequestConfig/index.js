import React from 'react'

import { Container, Menu } from './styles'
import TabButton from '../TabButton'

export default function RequestConfig(){
  return (
    <Container>
      <Menu>
        <TabButton more>Body</TabButton>
        <TabButton more active>Auth</TabButton>
        <TabButton>Query</TabButton>
        <TabButton>Header</TabButton>
        <TabButton>Docs</TabButton>
      </Menu>
    </Container>
  )
}