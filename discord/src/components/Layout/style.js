import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-rows: 71px 240px auto 240px;
  grid-template-columns: 46px auto 52px;

  grid-template-areas: 
    'a b c c'
    'a d e f'
    'a g e f';

  height: 100vh;
`