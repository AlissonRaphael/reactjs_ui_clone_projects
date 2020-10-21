import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Container, Menu } from './styles'
import TabButton from '../TabButton'
import Body from '../../pages/Body'
import Auth from '../../pages/Auth'
import Query from '../../pages/Query'
import Header from '../../pages/Header'
import Docs from '../../pages/Docs'

export default function RequestConfig(){
  return (
    <Container>
      <Menu>
        <TabButton more>Body</TabButton>
        <TabButton more active>Auth</TabButton>
        <TabButton>Query</TabButton>
        <TabButton>Header</TabButton>
        <TabButton>Docs</TabButton>
      </Menu>

      <BrowserRouter>
        <Routes>
          <Route path='/body' element={<Body/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/query' element={<Query/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/docs' element={<Docs/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}