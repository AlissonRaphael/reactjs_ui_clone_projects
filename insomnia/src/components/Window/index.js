import React from 'react'

import { Overlay, Modal } from './styles'

export default function Window({children, x, y, clickOut}){
  return (
    <>
      <Overlay onClick={clickOut}>
      </Overlay>
      <Modal x={x} y={y}>
        {children}
      </Modal>
    </>
  )
}