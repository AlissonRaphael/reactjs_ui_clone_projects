import React from 'react'

import { Overlay, Modal } from './styles'

export default function Window({children, xyDistance, clickOut}){
  return (
    <Overlay onClick={clickOut}>
      <Modal top={xyDistance[0]} left={xyDistance[1]} >
        {children}
      </Modal>
    </Overlay>
  )
}