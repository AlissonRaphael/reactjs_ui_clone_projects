import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 4;
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: fixed;
  top: 0px;
  left: 0px;
`

export const Modal = styled.div`
  z-index: 5;
  padding: 6px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  position: absolute;
  top: ${(props) => props.distance ? props.distance : 0 }px;
  left: ${(props) => props.isMenu ? 200 : 0 }px;

  p {
    width: 100%;
    padding: 8px 14px;
    text-transform: uppercase;
    font-size: 10px;
    color: var(--input-color);
    display: flex;
    align-items: center;

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