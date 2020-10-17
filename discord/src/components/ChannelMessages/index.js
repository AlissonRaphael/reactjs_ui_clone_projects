import React from 'react'

import { Container, Message, Header, Content } from './styles'
export { Mention } from './styles'

import Avatar from '../Avatar'

export default function ChannelMessages({ author, date, content, hasMention, isBot, color }){
  return (
    <Container className={ hasMention ? 'mention' : '' }>
      <Avatar color={color} size={38} isBot={isBot}/>

      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  )
}