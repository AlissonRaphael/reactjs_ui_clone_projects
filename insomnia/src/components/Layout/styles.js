import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100%;
  width: 100%;

  display: grid;
  position: relative;
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