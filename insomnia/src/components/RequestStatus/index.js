import React, { useContext } from 'react'
import RequestContext from '../../RequestContext'

import { Container, FirstSection, SecondSection, Box, Button, MoreIcon } from './styles'
import RequestResponse from '../RequestResponse'

export default function RequestStatus(){
  const [state,] = useContext(RequestContext)

  return (
    <Container>
      <FirstSection>
        { state.file &&
          <>
            <div className="boxes">
              <Box status={state.statusText}>{state.status} {state.statusText}</Box>
              <Box>{state.time}</Box>
              <Box>{state.size}</Box>
            </div>

            <Button>
              <span>17 hour Ago</span>
              <MoreIcon/>
            </Button>
          </>
        }
      </FirstSection>


      <SecondSection>
        <RequestResponse/>
      </SecondSection>
    </Container>
  )
}