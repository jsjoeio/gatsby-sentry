import styled from 'styled-components'

export default styled.button`
  display: block;
  background-color: #FFF;
  border-radius: 14px;
  color: #9765ca;
  padding: 14px 24px;
  font-size: 25px;
  font-weight: bold;
  margin: 80px auto 0;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  &:hover {
    color: #663399;
    cursor: pointer;
    transform: translate(0px, 1px) scale(1.1, 1.1);
  }
`
