import styled from 'styled-components'

export const Container = styled.div`
  z-index: 3;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  position: absolute;
  top: ${(props) => props.distance ? props.distance : 0 };
  left: 0;

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
    border: none;
    padding: 10px;
    display: flex;
    grid-template-columns: 15% 85%;
    align-items: center;
    background-color: transparent;

    svg {
      width: 100%;
      height: 100%;
    }

    div {
      margin-left: 6px;
      color: var(--text-color-to-dark);
      white-space: nowrap;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        margin-left: 12px;
        color: var(--input-color);
      }
    }

    &:hover {
      background-color: rgba(0,0,0,0.05);
    }

    &:last-child {
      border-end-end-radius: 5px;
    }
  }
`