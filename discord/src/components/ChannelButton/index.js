import React from 'react'

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export default function ChannelButton({ channelName, selected }){
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}