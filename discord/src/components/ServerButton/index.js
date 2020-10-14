import React from 'react'

import { Button  } from './styles'

export default function ServerButton({ selected, isHome, hasNotifications, mentions }){
  return (
    <Button
      className={selected ? 'active' : ''}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
    >

    </Button>
  )
}
