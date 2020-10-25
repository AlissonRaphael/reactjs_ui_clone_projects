import React, { useState, useContext, useEffect } from 'react'

import RequestContext from '../../RequestContext'

import { Container } from './styles'

export default function Preview(){
  const [file, setFile] = useState('')
  const [path,] = useContext(RequestContext)

  useEffect(() => {
    async function getFile(){
      const response = await fetch(path);
      const json = await response.json();

      setFile(json)
    }

    getFile()
  }, [path])



  return (
    <Container>
      { JSON.stringify(file, null, 2) }
    </Container>
  )
}