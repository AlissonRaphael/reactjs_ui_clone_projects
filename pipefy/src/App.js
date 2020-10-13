import React from 'react'

import GlobalStyles from './styles/global'

import Header from './components/Header'
import Board from './components/Board'

export default function App(){

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Board/>
    </>
  )
}
