import React from 'react'

import { Container, Messages } from './styles'

import ChannelMessages, { Mention } from '../ChannelMessages'

import InputMessage from '../InputMessage'

export default function(){
  return (
    <Container>

      <Messages>
        <ChannelMessages 
          author='Alisson Oliveira'
          date='25/06/2020'
          content="tô montando o squad"
          color='steelblue'
        />

        <ChannelMessages 
          author='Alisson Oliveira'
          date='25/06/2020'
          content="falta dois"
          color='steelblue'
        />

        <ChannelMessages 
          author='C3P0'
          date='25/06/2020'
          content="\o/"
          isBot
        />

        <ChannelMessages 
          author='Alisson Oliveira'
          date='25/06/2020'
          content="entrem ai"
          color='steelblue'
        />

        <ChannelMessages 
          author='Alisson Oliveira'
          date='25/06/2020'
          content="go go go"
          color='steelblue'
        />

        <ChannelMessages 
          author='Talessa Marina'
          date='25/06/2020'
          content={
            <>
              <Mention>@Alisson Oliveira</Mention> eu vou
            </>
          }
          hasMention
          color='hotPink'
        />

        <ChannelMessages 
          author='Talessa Marina'
          date='25/06/2020'
          content='coloque eu'
          color='hotPink'
        />

        <ChannelMessages 
          author='C3P0'
          date='25/06/2020'
          content="go!"
          isBot
        />

        <ChannelMessages 
          author='Alisson Oliveira'
          date='25/06/2020'
          content="entre ai, tô chamando..."
          color='steelblue'
        />

        <ChannelMessages 
          author='Talessa Marina'
          date='25/06/2020'
          content='to entrando'
          color='hotPink'
        />

      </Messages>

      <InputMessage />

    </Container>
  )
}
