import React from 'react'

import { Box, Role, Title, Button, HelpIcon, Options, Option, AddButton } from './styles'

export default function SearchOptions(){
  return (
    <Box>
      <Role>
        <Title>Opções de Busca</Title>
        <Button>
          <HelpIcon/>
        </Button>
      </Role>

      <Options>
        <Option>
          <p>de:<span>usuário</span></p>
          <AddButton/>
        </Option>

        <Option>
          <p>mencionado:<span>usuário</span></p>
          <AddButton/>
        </Option>

        <Option>
          <p>tem:<span>link, anexo, arquivo</span></p>
          <AddButton/>
        </Option>

        <Option>
          <p>antes:<span>data específica</span></p>
          <AddButton/>
        </Option>

        <Option>
          <p>durante:<span>data específica</span></p>
          <AddButton/>
        </Option>

        <Option>
          <p>depois:<span>data específica</span></p>
          <AddButton/>
        </Option>

        <Option>
          <p>em:<span>canal</span></p>
          <AddButton/>
        </Option>

      </Options>
    </Box>
  )
}