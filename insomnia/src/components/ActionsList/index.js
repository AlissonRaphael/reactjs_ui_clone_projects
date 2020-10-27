import React, { useState } from 'react'
import { FaWrench, FaPlusCircle, FaFolder } from 'react-icons/fa'

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

  return (
    <Container>

      <FirstSection>
        <Button>
          <span>Test</span>
          <MoreIcon/>
        </Button>
      </FirstSection>

      <SecondSection>
        <FirstDivision>
          <RefButton>
            <Button className="simple" onClick={() => setEnvironment(true)}>
              <span>No Environment</span>
              <MoreIcon/>
            </Button>

          {environment && 
            <Window distance={24} clickOut={() => setEnvironment(false)}>
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
            <Window distance={28} clickOut={() => setCreate(false)}>
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
          <div>POST</div>
          <div>Post</div>
        </LastDivision>
      </SecondSection>

    </Container>
  )
}