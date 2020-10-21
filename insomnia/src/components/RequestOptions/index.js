import React from 'react'

import { Container, FirstSection, SecondSection, Button, MoreIcon, Input } from './styles'
import RequestConfig from '../RequestConfig'

export default function RequestOptions(){
  return (
    <Container>
      <FirstSection>
        <Button>
          <span>GET</span>
          <MoreIcon/>
        </Button>

        <Input/>

        <Button>
          <span>Send</span>
        </Button>
      </FirstSection>

      <SecondSection>
        <RequestConfig/>
      </SecondSection>
    </Container>
  )
}