import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  z-index: 3;
  padding: 6px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  position: absolute;
  top: ${(props) => props.top ? props.top : 0 }px;
  left: ${(props) => props.left ? props.left : 0 }px;

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
      width: 12px;
      height: 12px;
    }

    div {
      margin-left: 14px;
      color: var(--text-color-to-dark);
      white-space: nowrap;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        margin-left: 30px;
        color: var(--input-color);
      }
    }

    &:hover {
      background-color: rgba(0,0,0,0.05);
    }
  }
`