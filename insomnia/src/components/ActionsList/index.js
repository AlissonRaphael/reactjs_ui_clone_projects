import React from 'react'

import { Container, FirstSection, Button, MoreIcon, SecondSection, Input } from './styles'

export default function ActionsList(){
  return (
    <Container>

      <FirstSection>
        <Button>
          <span>WorkspaceName</span>
          <MoreIcon/>
        </Button>
      </FirstSection>

      <SecondSection>
        <div>
          <Button>
            <span>EnvironmentName</span>
            <MoreIcon/>
          </Button>

          <Button>
            <span>Cookies</span>
          </Button>
        </div>

        <div>
          <Input/>
          <Button>
            <span>Cookies</span>
            <MoreIcon/>
          </Button>
        </div>

        <div>
          <div>POST</div>
          <div>Post</div>
        </div>
      </SecondSection>

    </Container>
  )
}