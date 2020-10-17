import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(props) => props.size ? (props.size + 'px') : '32px' };
  height: ${(props) => props.size ? (props.size + 'px') : '32px' };
  border-radius: 50%;
  background-color: ${(props) => props.color ? props.color : 'var(--primary)' };

  img {
    width: 80%;
    height: 80%;
    color: var(--white);
    border-radius: 50%;
  }

  &.bot {
    background-color: var(--mention-detail);
  }

  position: relative;

  &::after {
    content: '';
    display: ${(props) => props.isOn ? 'flex' : 'none' };
    background-color: var(--on);

    width: 11px;
    height: 11px;

    position: absolute;
    bottom: -3px;
    right: -3px;

    border-radius: 50%;
    border: 3px solid var(--secondary);

    align-items: center;
    justify-content: center;

    font-size: 11px;
    font-weight: bold;
    color: var(--white);
}
`