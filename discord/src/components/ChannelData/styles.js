import styled from 'styled-components'

export const Container = styled.div`
  grid-area: e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);

`

export const Messages = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh -46px -68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`
