import React, { useState } from 'react'
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'
import { MdMenu, MdMoreHoriz, MdCheck } from 'react-icons/md'
import { HiCode } from 'react-icons/hi'

import { Container, Menu, RefButton, MoreIcon, Content } from './styles'
import Window from '../Window'
import Body from '../../pages/Body'
import Auth from '../../pages/Auth'
import Query from '../../pages/Query'
import Header from '../../pages/Header'
import Docs from '../../pages/Docs'

export default function RequestConfig(){
  const [bodyOptions, setBodyOptions] = useState(false)
  const [authOptions, setAuthOptions] = useState(false)

  function menuBody(){
    if(location.pathname.includes('body')) setBodyOptions(true)
  }

  function menuAuth(){
    if(location.pathname.includes('auth')) setAuthOptions(true)
  }

  return (
    <Container>
      <BrowserRouter>
        <Menu>
          <RefButton>
            <NavLink to="/body" onClick={() => menuBody()}>
              Body
              <MoreIcon/>
            </NavLink>

            {bodyOptions && 
              <Window y={40} x={40} clickOut={() => setBodyOptions(false)}>
                <div>
                  <p><MdMenu/>Structured</p>
                  <button>
                    <svg></svg>
                    <div>Multipart Form</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Form URL Encoded</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>GraphQL Query</div>
                  </button>

                  <p><HiCode/>Text</p>

                  <button>
                    <svg></svg>
                    <div>JSON</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>XML</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>YAML</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>EDN</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Other</div>
                  </button>

                  <p><MdMoreHoriz/>Other</p>

                  <button>
                    <svg></svg>
                    <div>Binary File</div>
                  </button>

                  <button>
                    <MdCheck/>
                    <div>No Body</div>
                  </button>
                </div>
              </Window>
            }
          </RefButton>

          <RefButton>
            <NavLink to="/auth" onClick={() => menuAuth()}>
              Auth
              <MoreIcon/>
            </NavLink>

            {authOptions && 
              <Window y={40} x={40} clickOut={() => setAuthOptions(false)}>
                <div>
                  <button>
                    <svg></svg>
                    <div>Basic Auth</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Digest Auth</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>GraphQL Query</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>OAuth 1.0</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>OAuth 2.0</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Microsoft NTLM</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>AWS IAM v4</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Bearer Token</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Hawk</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Atlassian ASAP</div>
                  </button>

                  <button>
                    <svg></svg>
                    <div>Netr File</div>
                  </button>

                  <p>Other</p>

                  <button>
                    <MdCheck/>
                    <div>No Authentication</div>
                  </button>
                </div>
              </Window>
            }
          </RefButton>

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

        <Content>
          <Routes>
            <Route path='/body' element={<Body/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/query' element={<Query/>}/>
            <Route path='/header' element={<Header/>}/>
            <Route path='/docs' element={<Docs/>}/>
          </Routes>
        </Content>
      </BrowserRouter>
    </Container>
  )
}