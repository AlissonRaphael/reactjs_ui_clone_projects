import styled from 'styled-components'

export const Container = styled.div`
  z-index: 3;
  background-color: var(--box);
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  position: absolute;
  top: ${(props) => props.distance ? props.distance : 0 };
  left: 0;

  p {
    min-width: 100%;
    padding: 14px;
    text-transform: uppercase;
    font-size: 10px;
    color: var(--input-color);
    position: absolute;

    &::before {
      content: '';
      height: 1px;
      width: 100%;
      background-color: var(--input-color);
      position: relative;
      top: 0;
      left: 0;
    }
  }

  button {
    border: none;
    padding: 12px;
    display: grid;
    grid-template-columns: 15% 60% 35%;
    align-items: center;

    span {
      color: var(--text-color-to-dark);
      white-space: nowrap;
    }

    span:nth-child(3){
      margin-left: 10px;
      color: var(--input-color);
    }

    &.hover {
      background-color: rgba(0,0,0,0.2);
    }
  }

`