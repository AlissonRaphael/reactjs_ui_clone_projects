import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: fixed;
  top: 0px;
  left: 0px;
`

export const Modal = styled.div`
  z-index: 10;
  padding: 6px 0px;
  min-width: 210px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: absolute;
  top: ${(props) => props.y ? props.y : 0 }px;
  left: ${(props) => props.x ? props.x : 0 }px;

  p {
    width: 100%;
    padding: 8px 14px;
    text-transform: uppercase;
    font-size: 10px;
    color: var(--input-color);
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      width: 13px;
      height: 13px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      margin-left: 10px;
      width: 100%;
      background-color: var(--input-color);
    }
  }

  button {
    width: 100%;
    border: none;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    background-color: transparent;

    svg {
      margin-left: 10px;
      width: 12px;
      height: 12px;

      path {
        height: 100%;
        width: 100%;
      }
    }

    div {
      width: 100%;
      margin-left: 10px;
      color: var(--text-color-to-dark);
      white-space: nowrap;
      display: inline-flex;
      justify-content: space-between;

      span {
        width: 100%;
        margin-left: 30px;
        color: var(--input-color);
        text-align: right;
      }
    }

    &:hover {
      background-color: rgba(0,0,0,0.05);
    }
  }
`