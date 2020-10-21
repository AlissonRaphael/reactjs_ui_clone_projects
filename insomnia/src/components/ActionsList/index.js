import React from 'react'

import {
  Container,
  FirstSection,
  SecondSection,
  FirstDivision,
  SecondDivision,
  LastDivision,
  Button,
  ButtonAdd,
  MoreIcon,
  AddIcon,
  Input
} from './styles'

export default function ActionsList(){
  return (
    <Container>

      <FirstSection>
        <Button>
          <span>Test</span>
          <MoreIcon/>
        </Button>
      </FirstSection>

      <SecondSection>
        <FirstDivision>
          <Button className="simple">
            <span>No Environment</span>
            <MoreIcon/>
          </Button>

          <Button className="simple">
            <span>Cookies</span>
          </Button>
        </FirstDivision>

        <SecondDivision>
          <Input placeholder="Filter" />
          <ButtonAdd>
            <AddIcon/>
            <MoreIcon/>
          </ButtonAdd>
        </SecondDivision>

        <LastDivision>
          <div>POST</div>
          <div>Post</div>
        </LastDivision>
      </SecondSection>

    </Container>
  )
}