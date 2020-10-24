import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 14px;
    font-size: 14px;
    color: rgba(255,255,255,0.55);
  }

  img {
    opacity: 0.15;
  }
`

export const Button = styled.button`
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-top: 20px;
  padding: 7px 14px;
  background-color: transparent;
  color: var(--input-color);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255,255,255,0.03);
  }
`