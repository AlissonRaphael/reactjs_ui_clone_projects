import React from 'react'

import { Overlay, Modal } from './styles'

export default function Window({children, distance, isMenu, clickOut}){
  return (
    <>
      <Overlay onClick={clickOut}>
      </Overlay>
      <Modal distance={distance} isMenu={isMenu}>
        {children}
      </Modal>
    </>
  )
}