import React from 'react'

import { Container, Form, Input, Button, AddIcon, PresentIcon, GifIcon, EmoticonIcon } from './styles'

export default function InputMessage(){
  return (
    <Container>
      <Form>
        <Button>
          <AddIcon/>
        </Button>

        <Input type="text" placeholder="Conversar em chat-livre"/>

        <div>
          <Button>
            <PresentIcon/>
          </Button>

          <Button>
            <GifIcon/>
          </Button>

          <Button>
            <EmoticonIcon/>
          </Button>
        </div>
      </Form>
    </Container>
  )
}
