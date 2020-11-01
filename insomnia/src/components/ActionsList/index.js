import React, { useState } from 'react'
import { FaWrench, FaPlusCircle, FaFolder, FaGlobeAsia, FaUsers } from 'react-icons/fa'
import { TiArrowForward } from 'react-icons/ti'
import { MdSettings } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'

import Window from '../Window'

import {
  Container,
  FirstSection,
  SecondSection,
  FirstDivision,
  SecondDivision,
  LastDivision,
  Button,
  RefButton,
  ButtonAdd,
  MoreIcon,
  AddIcon,
  Input
} from './styles'

export default function ActionsList(){
  const [environment, setEnvironment] = useState(false)
  const [create, setCreate] = useState(false)
  const [workspace, setWorkspace] = useState(false)

  return (
    <Container>
      <FirstSection>
        <RefButton>
          <Button onClick={() => setWorkspace(true)}>
            <span>Test</span>
            <MoreIcon/>
          </Button>

          {workspace && 
            <Window y={39} x={200} clickOut={() => setWorkspace(false)}>
              <div>
                <p>Test</p>

                <button>
                  <FaWrench />
                  <div>
                    Workspace Settings
                    <span>Shift+Ctrl+,</span>
                  </div>
                </button>

                <button>
                  <FaGlobeAsia/>
                  <div>
                    Share Test
                    <span></span>
                  </div>
                </button>

                <p>Switch Workspace</p>

                <button>
                  <svg></svg>
                  <div>
                    Create Workspace
                    <span></span>
                  </div>
                </button>

                <p>Insomnia v{new Date(Date.now()).getFullYear()}</p>

                <button>
                  <MdSettings/>
                  <div>
                    Preferences 
                    <span>Ctrl+,</span>
                  </div>
                </button>

                <button>
                  <TiArrowForward/>
                  <div>
                    Import/Export
                    <span></span>
                  </div>
                </button>

                <button>
                  <FiLogIn/>
                  <div>
                    Login
                    <span></span>
                  </div>
                </button>

                <button>
                  <FaUsers/>
                  <div>
                    Upgrade to Plus
                    <span></span>
                  </div>
                </button>
              </div>
            </Window>
          }
        </RefButton>
      </FirstSection>

      <SecondSection>
        <FirstDivision>
          <RefButton>
            <Button className="simple" onClick={() => setEnvironment(true)}>
              <span>No Environment</span>
              <MoreIcon/>
            </Button>

          {environment && 
            <Window y={24} clickOut={() => setEnvironment(false)}>
              <div>
                <p>Activate Environment</p>
                <button>
                  <svg></svg>
                  <div>No Environment</div>
                </button>

                <p>General</p>

                <button>
                  <FaWrench size={12}/>
                  <div>
                    Manage Environments
                    <span>Ctrl+E</span>
                  </div>
                </button>
              </div>
            </Window>
          }
          </RefButton>

          <Button className="simple">
            <span>Cookies</span>
          </Button>
        </FirstDivision>

        <SecondDivision>
          <Input placeholder="Filter" />
          <RefButton>
            <ButtonAdd onClick={() => setCreate(true)}>
              <AddIcon/>
              <MoreIcon/>
            </ButtonAdd>

            {create && 
            <Window y={28} clickOut={() => setCreate(false)}>
              <div>
                <button>
                  <FaPlusCircle size={12}/>
                  <div>
                    New Request
                    <span>Ctrl+N</span>
                  </div>
                </button>

                <button>
                  <FaFolder size={12}/>
                  <div>
                    New Folder
                    <span>Shift+Ctrl+N</span>
                  </div>
                </button>
              </div>
            </Window>
          }
          </RefButton>
        </SecondDivision>

        <LastDivision>
          <div></div>
          <div></div>
        </LastDivision>
      </SecondSection>

    </Container>
  )
}