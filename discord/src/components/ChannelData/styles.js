import styled from 'styled-components'

export const Container = styled.div`
  grid-area: e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
  max-height: calc(100vh - 46px);
`

export const Messages = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border: 4px solid var(--primary);
    border-left: none;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--primary);
  }
`
