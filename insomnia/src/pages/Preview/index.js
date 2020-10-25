import React, { useState, useContext, useEffect } from 'react'
import ReactJson from 'react-json-view'

import RequestContext from '../../RequestContext'

import { Container } from './styles'

export default function Preview(){
  const [file, setFile] = useState('')
  const [path,] = useContext(RequestContext)

  useEffect(() => {
    async function getFile(){
      const response = await fetch('https://api.github.com/')
      const json = await response.json()

      setFile(json)
    }

    getFile()
  }, [path])


  return (
    <Container>
      <ReactJson
        src={file}
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
    </Container>
  )
}