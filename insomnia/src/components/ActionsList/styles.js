import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100%;
  max-width: 100%;

  display: grid;
  grid-template-rows: 47px 1fr;

  background-color: var(--background-list);
  border: 1px solid var(--border);
`

export const FirstSection = styled.div`
  padding: 0 14px;
  color: white;
  background-color: var( --primary-header);
  font-size: 18px;
  display: flex;
  align-items: center;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MoreIcon = styled.div`

`

export const SecondSection = styled.div`

`

export const Input = styled.input`

`