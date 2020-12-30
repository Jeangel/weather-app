import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { WeatherMainInformation } from './WeatherMainInformation'

const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  order: 2;
  ${breakpoint('desktop')`
    width: 70%;
    display: flex;
    align-items: flex-end;
    order: 1
  `}
`

export const MainSection = () => (
  <Container>
    <WeatherMainInformation />
  </Container>
)