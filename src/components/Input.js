import styled from 'styled-components'

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.2px solid #888888;
  color: white;
  line-height: 2.5;
  font-family: Roboto;
  font-weight: lighter;
  :focus {
    outline: none;
    border-bottom: 0.2px solid white;
  }
  ::placeholder {
    color: #888888;
    font-family: Roboto;
    font-weight: lighter;
  }
`