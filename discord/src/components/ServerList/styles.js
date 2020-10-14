import styled from 'styled-components'

export const Container = styled.div`
  grid-area: a;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);

  padding: 11px;
  max-height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`