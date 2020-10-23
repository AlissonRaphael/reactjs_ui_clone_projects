import React from 'react'
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu, MoreIcon } from './styles'
import Body from '../../pages/Body'
import Auth from '../../pages/Auth'
import Query from '../../pages/Query'
import Header from '../../pages/Header'
import Docs from '../../pages/Docs'

export default function RequestConfig(){
  return (
    <BrowserRouter>
      <Menu>
        <NavLink to="/body">
          Body
          <MoreIcon/>
        </NavLink>

        <NavLink to="/auth">
          Auth
          <MoreIcon/>
        </NavLink>

        <NavLink to="/query">
          Query
        </NavLink>

        <NavLink to="/header">
          Header
        </NavLink>

        <NavLink to="/docs">
          Docs
        </NavLink>
      </Menu>

      <Routes>
        <Route path='/body' element={<Body/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/query' element={<Query/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/docs' element={<Docs/>}/>
      </Routes>
    </BrowserRouter>
  )
}