import React from 'react'

import { Container, Category, AddCateogoryIcon } from './styles'

export default function ChannelList(){
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCateogoryIcon />
      </Category>

      {/* <ChannelButton channelName='chat-livre'/>
      <ChannelButton channelName='amoung-us'/>
      <ChannelButton channelName='brasileirão-bolão'/>
      <ChannelButton channelName='faculdade'/>
      <ChannelButton channelName='pubg-mobile'/> */}

    </Container>
  )
}
