import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 10px;
  border: none;
  box-shadow: none;
  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  :disabled {
    background-color: #ccc;
    color: white;
    cursor: not-allowed;
  }
`