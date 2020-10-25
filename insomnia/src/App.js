import React, { useState } from 'react'

import RequestContext from './RequestContext'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'

export default function App(){
  const [path, setPath] = useState('')


  return (
    <RequestContext.Provider value={[path, setPath]}>
      <GlobalStyle/>
      <Layout/>
    </RequestContext.Provider>
  )
}
