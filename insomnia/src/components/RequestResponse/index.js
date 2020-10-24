import React from 'react'
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'

import { Container, Menu, MoreIcon, Content } from './styles'
import Preview from '../../pages/Preview'
import HeaderStatus from '../../pages/HeaderStatus'
import Cookies from '../../pages/Cookies'
import Timeline from '../../pages/Timeline'

export default function RequestResponse(){
  return (
    <Container>
      <BrowserRouter>
        <Menu>
          <NavLink to="/preview">
            Preview
            <MoreIcon/>
          </NavLink>

          <NavLink to="/headerstatus">
            Header
            <MoreIcon/>
          </NavLink>

          <NavLink to="/cookies">
            Cookies
          </NavLink>

          <NavLink to="/timeline">
            Timeline
          </NavLink>
        </Menu>

        <Content>
          <Routes>
            <Route path='/preview' element={<Preview/>}/>
            <Route path='/headerstatus' element={<HeaderStatus/>}/>
            <Route path='/cookies' element={<Cookies/>}/>
            <Route path='/timeline' element={<Timeline/>}/>
          </Routes>
        </Content>
      </BrowserRouter>
    </Container>
  )
}