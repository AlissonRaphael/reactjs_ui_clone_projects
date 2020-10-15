import React from 'react'

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export default function ChannelButton({ channelName, selected }){
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div className="options">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}