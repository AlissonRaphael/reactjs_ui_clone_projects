import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0px 1px 4px 0px rgba(192,208,230,0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

`

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background-color: ${props => props.color};
`