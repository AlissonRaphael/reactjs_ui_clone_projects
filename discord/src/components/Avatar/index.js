import React from 'react'

import { Container } from './styles'

import Discord from '../../assets/discord.png'

export default function Avatar({ isBot, isOn, color }){
  return (
    <Container className={isBot ? 'bot' : ''} isOn={isOn} color={color}>
      <img src={Discord}/>
    </Container>
  )
}