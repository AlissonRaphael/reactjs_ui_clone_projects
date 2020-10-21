import React from 'react'

import { Container, FirstSection, SecondSection, Box, Button, MoreIcon } from './styles'

export default function RequestStatus(){
  return (
    <Container>
      <FirstSection>
        <div className="boxes">
          <Box color={'var(--error)'}>Error</Box>
          <Box>0 ms</Box>
          <Box>0 B</Box>
        </div>

        <Button>
          <span>17 hour Ago</span>
          <MoreIcon/>
        </Button>
      </FirstSection>


      <SecondSection>
        
      </SecondSection>
    </Container>
  )
}