import React, { useState } from 'react'

import { Container, EwResize } from './styles'

import ActionList from '../ActionsList'
import Requests from '../Requests'

export default function Layout(){
  const [position, setPosition] = useState(window.innerWidth/5)
  const [size, setSize] = useState((window.innerWidth/5)*4)
  const [grid, setGrid] = useState(`${position}px ${size}px`)

  function resize(event){
    window.addEventListener('mousemove', start, false)
    window.addEventListener('mouseup', stop, false)

    function start(event){
      let positionX = Math.trunc(event.clientX)
      if(positionX % 5 == 0 || positionX % 5 == 5){
        setPosition(positionX)
        setGrid(`${positionX}px ${window.innerWidth-positionX}px`)
      }
    }

    function stop(){
      setSize(window.innerWidth-position)
      window.removeEventListener('mousemove', start, false)
      window.removeEventListener('mouseup', stop, false)
    }
  }

  return (
    <Container style={{ gridTemplateColumns: grid }}>

      <ActionList/>
      <EwResize style={{ left: position + 'px' }} onMouseDown={(event) => resize(event)}/>
      <Requests size={size} newPosition={position}/>

    </Container>
  )
}