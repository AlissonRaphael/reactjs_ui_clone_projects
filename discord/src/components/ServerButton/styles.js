import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;

  background-color: ${(props) => props.isHome ? 'tomato' : 'var(--primary)'};

  cursor: pointer;
  position: relative;
  margin-bottom: 8px;

  img {
    height: 24px;
    width: 24px;
  }

  transition: all 0.2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${(props) => props.isHome ? 'tomato' : 'var(--discord)'}
  }

  &::before {
    content: '';
    width: 9px;
    height: 9px;

    position: absolute;
    left: -15px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    display: ${(props) => props.hasNotifications ? 'inline' : 'none' };
  }

  &::after {
    content: '${(props) => props.mentions && props.mentions }';
    display: ${(props) => props.mentions ? 'flex' : 'none' };
    background-color: var(--notification);

    width: auto;
    height: 16px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    padding: 0px 3px;
    border-radius: 9px;
    border: 4px solid var(--quaternary);

    align-items: center;
    justify-content: center;

    font-size: 11px;
    font-weight: bold;
    color: var(--white);
  }
`
