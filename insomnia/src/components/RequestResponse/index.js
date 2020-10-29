import React, { useState } from 'react'
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'
import { MdCheck, MdSave } from 'react-icons/md'
import { VscDebug } from 'react-icons/vsc'

import { Container, Menu, RefButton, MoreIcon, Content } from './styles'
import Window from '../Window'
import Preview from '../../pages/Preview'
import HeaderStatus from '../../pages/HeaderStatus'
import Cookies from '../../pages/Cookies'
import Timeline from '../../pages/Timeline'

export default function RequestResponse(){
  const [previewMenu, setPreviewMenu] = useState(false)

  function menuPreview(){
    if(location.pathname.includes('preview')) setPreviewMenu(true)
  }

  return (
    <Container>
      <BrowserRouter>
        <Menu>
          <RefButton>
            <NavLink to="/preview" onClick={() => menuPreview()}>
              Preview
              <MoreIcon/>
            </NavLink>

            {previewMenu && 
              <Window y={40} x={40} clickOut={() => setPreviewMenu(false)}>
                <div>
                  <p>Preview Mode</p>
                  <button>
                    <MdCheck/>
                    <div>Visual Preview</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Source Code</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Raw Data</div>
                  </button>

                  <p>Actions</p>

                  <button>
                    <MdSave/>
                    <div>Save Raw Response</div>
                  </button>

                  <button>
                    <MdSave/>
                    <div>Save Prettifield Response</div>
                  </button>

                  <button>
                    <VscDebug/>
                    <div>Save HTTP Debug</div>
                  </button>
                </div>
              </Window>
            }
          </RefButton>

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