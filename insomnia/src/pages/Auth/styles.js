import styled from 'styled-components'
import { HiLockOpen } from 'react-icons/hi'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  p {
    margin-top: 20px;
    font-size: 14px;
    color: rgba(255,255,255,0.6);
  }

  svg {
    color: rgba(255,255,255,0.1);
  }

`

export const LockOpen = styled(HiLockOpen)`
  height: 100px;
  width: 100px;
`
