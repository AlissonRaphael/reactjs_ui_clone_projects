import React, { useState, useContext } from 'react'

import { Container, FirstSection, SecondSection, Button, MoreIcon } from './styles'
import RequestConfig from '../RequestConfig'
import RequestContext from '../../RequestContext'

export default function RequestOptions({ positions, setPositions }){
  const [input, setInput] = useState('')
  const [state, setState] = useContext(RequestContext)
  
  function submit(){
    setState({ ...state, path: input, loading: true })
  }

  function handleKeyUp(event){
    const key = event.which || event.keyCode
    if(key === 13) submit()
  }

  function handleChange(event){
    setInput(event.target.value)
  }

  return (
    <Container
      width={positions.two}
      height={Infinity}
      minConstraints={[365]}
    >
      <>
        <FirstSection>
          <Button>
            <span>GET</span>
            <MoreIcon/>
          </Button>

          <input
            type="text"
            value={input}
            onChange={(event) => handleChange(event)}
            onKeyUp={(event) => handleKeyUp(event)}
          />

          <Button onClick={() => submit()}>
            <span>Send</span>
          </Button>
        </FirstSection>

        <SecondSection>
          <RequestConfig/>
        </SecondSection>
      </>
    </Container>
  )
}