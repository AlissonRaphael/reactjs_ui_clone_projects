import React, { useState } from 'react'

import RequestContext from './RequestContext'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'

export default function App(){
  const [state, setState] = useState('')

  return (
    <RequestContext.Provider value={[state, setState]}>
      <GlobalStyle/>
      <Layout/>
    </RequestContext.Provider>
  )
}
