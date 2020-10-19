import React from 'react'

import {  } from './styles'
import { Sticky } from '../../styles/index'

function First(){
  return (
    <Sticky className="first"/>
  )
}

export default function FirstAndSecond(){
  return (
    <Sticky className="second"/>
  )
}
