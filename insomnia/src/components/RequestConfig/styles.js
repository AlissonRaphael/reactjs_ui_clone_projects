import styled from 'styled-components'
import { MdArrowDropDown } from 'react-icons/md'

export const Container = styled.div`
  display:flex;
  flex-direction: column;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--border);

    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  a {
    font-size: 14px;
    padding: 9px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border);

    z-index: 1;
    color: var(--input-color);
    background-color: transparent;
    transition: background-color 0s ease 0.1s;

    &:focus {
      background-color: rgba(255,255,255, 0.2);
    }

    &.active {
      color: #fff;
      position: relative;
      border-bottom: 1px solid var(--background);

      &::after {
        content: '';
        width: 1px;
        height: 100%;
        background-color: var(--border);
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
      }

      &::before {
        content: '';
        width: 1px;
        height: 100%;
        background-color: var(--border);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }
  }

  div:first-child a.active {
    position: relative;
      &::before {
        content: '';
        width: 0;
        height: 0;
      }
  }
`

export const RefButton = styled.div`
  position: relative;
`

export const MoreIcon = styled(MdArrowDropDown)`
  width: 20px;
  height: 20px;
`

export const Content = styled.div`
  height: calc(100vh - 86px);
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--background-list);
    border: 4px solid var(--background);
    border-left: none;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

`