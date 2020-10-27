import React, { useState } from 'react'
import { FaWrench } from 'react-icons/fa'

import Window from '../Window'

import {
  Container,
  FirstSection,
  SecondSection,
  FirstDivision,
  SecondDivision,
  LastDivision,
  Button,
  ButtonAdd,
  MoreIcon,
  AddIcon,
  Input
} from './styles'

export default function ActionsList(){
  const [environment, setEnvironment] = useState(false)

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
          <Button className="simple" onClick={() => setEnvironment(true)}>
            <span>No Environment</span>
            <MoreIcon/>
          </Button>

          {environment && 
            <Window xyDistance={[76, 6]} clickOut={() => setEnvironment(false)}>
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

          <Button className="simple">
            <span>Cookies</span>
          </Button>
        </FirstDivision>

        <SecondDivision>
          <Input placeholder="Filter" />
          <ButtonAdd>
            <AddIcon/>
            <MoreIcon/>
          </ButtonAdd>
        </SecondDivision>

        <LastDivision>
          <div>POST</div>
          <div>Post</div>
        </LastDivision>
      </SecondSection>

    </Container>
  )
}