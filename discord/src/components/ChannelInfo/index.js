import React, { useState } from 'react'

import {
  Container, 
  HashtagIcon, 
  Title, 
  Button, 
  BellIcon, 
  PushpinIcon, 
  UserIcon,
  Form,
  Input,
  SearchIcon,
  InboxIcon,
  HelpIcon
} from './styles'

import SearchOptions from '../SearchOptions'

export default function ChannelInfo(){
  const [input, setInput] = useState('')
  const [expand, setExpand] = useState(false)

  return (
    <Container>
      <div>
        <HashtagIcon/>
        <Title>chat-livre</Title>
      </div>

      <div>
        <Button>
          <BellIcon />
        </Button>

        <Button>
          <PushpinIcon />
        </Button>

        <Button>
          <UserIcon />
        </Button>

        <Form expand={expand}>
          <Input
            type="text"
            placeholder="Buscar"
            onFocus={() => setExpand(true)}
            onBlur={() => {
              setExpand(false)
              setInput('')
            }}
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          {expand && <SearchOptions/>}

          <Button>
            <SearchIcon/>
          </Button>
        </Form>

        <Button>
          <InboxIcon />
        </Button>

        <Button>
          <HelpIcon />
        </Button>
      </div>

    </Container>
  )
}