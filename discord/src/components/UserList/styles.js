import styled from 'styled-components'

export const Container = styled.div`
  grid-area: f;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0px 16px;

  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
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

export const Role = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: var(--gray);
`

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;
  display:flex;
  align-items: center;
  cursor: pointer;

  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255,255,255,0.1);
    
    p {
      opacity: 1;
    }
  }

  p {
    margin-left: 13px;
    font-size: 14px;
    font-weight: 100;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px; 
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`
