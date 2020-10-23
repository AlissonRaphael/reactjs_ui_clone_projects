import React from 'react'

import { Container, Button } from './styles'
import Image from '../../assets/docs.png'

export default function Docs(){
  return (
    <Container>
      <img src={Image}/>
      <Button>Add Description</Button>
    </Container>
  )
}