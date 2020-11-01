import React, { useState, useEffect } from 'react'

import { Container, EwResize } from './style'

import RequestOptions from '../RequestOptions'
import RequestStatus from '../RequestStatus'

export default function Resquest({size, newPosition}){
  const [position, setPosition] = useState((size/2) + newPosition)
  const [grid, setGrid] = useState(`${size/2}px ${size/2}px`)

  useEffect(() => {
    let positionX = Math.trunc(event.clientX)
    if(positionX % 5 == 0 || positionX % 5 == 5){
      const percent1 = Math.trunc(positionX/window.innerWidth)
      const percent2 = 1 - percent1

      setPosition(positionX)
      setGrid(`${size*percent1}px ${size*percent2}px`)
      console.log(grid)
    }
  }, [newPosition])

  function resize(event){
    window.addEventListener('mousemove', start, false)
    window.addEventListener('mouseup', stop, false)

    function start(event){
      let positionX = Math.trunc(event.clientX)
      if(positionX % 5 == 0 || positionX % 5 == 5){
        const percent1 = Math.trunc(positionX/window.innerWidth)
        const percent2 = 1 - percent1

        setPosition(positionX)
        setGrid(`${size*percent1}px ${size*percent2}px`)
        console.log(grid)
      }
    }

    function stop(){
      window.removeEventListener('mousemove', start, false)
      window.removeEventListener('mouseup', stop, false)
    }
  }

  return (
    <Container style={{ gridTemplateColumns: grid }}>
      <EwResize style={{ left: position + 'px' }} onMouseDown={(event) => resize(event)}/>
      <RequestOptions/>
      <RequestStatus/>
    </Container>
  )
}