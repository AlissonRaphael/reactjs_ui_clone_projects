import React from 'react'

import { Container, FirstSection, SecondSection, SettingIcon, Input, Button } from './styles'

export default function Header(){
  return (
    <Container>
      <FirstSection>
        <div>
          <SettingIcon/>
          <Input placeholder="New name"/>
          <Input placeholder="New value"/>
        </div>
      </FirstSection>

      <SecondSection>
        <Button>Bulk Edit</Button>
      </SecondSection>
    </Container>
  )
}