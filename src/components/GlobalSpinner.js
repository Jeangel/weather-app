import React from 'react'
import styled from 'styled-components'
import Loader from 'react-spinners/CircleLoader'

const StyledLoader = styled.div`
  display: ${({ active }) => active ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: 0.7;
  z-index: 9999;
`

export const GlobalSpinner = ({ active, children }) => (
  <StyledLoader
    active={active}
  >
    <Loader size={100} color={'white'} />
  </StyledLoader>
)