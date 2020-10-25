import React, { useState } from 'react'

import RequestContext from './RequestContext'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'

export default function App(){
  const [state, setState] = useState({
    path: '',
    loading: false,
  })

  return (
    <RequestContext.Provider value={[state, setState]}>
      <GlobalStyle/>
      <Layout/>
    </RequestContext.Provider>
  )
}
