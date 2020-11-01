import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
`

export const EwResize = styled.div`
  z-index: 6;
  position: absolute;
  top: 0px;
  
  height: 100%;
  width: 5px;
  cursor: ew-resize;
  background-color: black;
`