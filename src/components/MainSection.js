import React from 'react'
import styled from 'styled-components'
import { WeatherMainInformation } from './WeatherMainInformation'

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
`

export const MainSection = () => (
  <Container>
    <WeatherMainInformation />
  </Container>
)