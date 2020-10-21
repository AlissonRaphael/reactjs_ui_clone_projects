import React from 'react'

import { Button, MoreIcon } from './styles'

export default function TabBuuton({ children, more, active }){
  return (
    <Button className={active ? 'active' : ''}>
      <span>{children}</span>
      {more && <MoreIcon/>}
    </Button>
  )
}