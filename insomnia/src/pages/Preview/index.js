import React, { useContext, useMemo } from 'react'
import ReactJson from 'react-json-view'

import RequestContext from '../../RequestContext'

import { Container } from './styles'

function sizeObject(object){
  let objectList = []
  let stack = [object]
  let bytes = 0

  while(stack.length){
    let value = stack.pop();

    if(typeof value === 'boolean') bytes += 4
    if(typeof value === 'string') bytes += value.length * 2
    if(typeof value === 'number') bytes += 8
    if(typeof value === 'object' && objectList.indexOf( value ) === -1){
        objectList.push( value )

        for(var i in value){
            stack.push( value[ i ])
        }
    }
  }
  return `${bytes/1000} Kb`;
}

export default function Preview(){
  const [state, setState] = useContext(RequestContext)

  useMemo(() => {
    async function getFile(){
      const start = 'start'
      const end = 'end'
      performance.mark(start)

      let response, file

      try {
        response = await fetch(state.path)
        file = await response.json()

      } catch(error) {
        console.log(error)
        
      } finally {

        performance.mark(end)
        performance.measure('requestTime', start, end)
        const { duration } = performance.getEntriesByName('requestTime')[0]

        setState({
          ...state,
          file: file,
          status: response.status,
          statusText: response.statusText,
          size: sizeObject(file),
          time: `${duration.toFixed(0)} ms`
        })
        console.log(state)
      }

    }

    if(state.path != '') getFile()
  }, [state.path])

  return (
    <Container>
      {state.file &&
        <ReactJson
          src={state.file}
          enableClipboard={false}
          onEdit={false}
          onAdd={false}
          onDelete={false}
          collapseStringsAfterLength={20}
          theme="monokai"
          style={{
            backgroundColor: 'transparent'
          }}
        />
      }
    </Container>
  )
}