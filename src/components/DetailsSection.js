import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Search } from './Search'
import { PlacesList } from './PlacesList'
import { WeatherDetails } from './WeatherDetails'

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  backdrop-filter: blur(15px);
  ${breakpoint('desktop')`
    position: absolute;
    width: 30%;
    height: 100vh;
    background-position-x: right;
    background-position-y: center;
    bottom: 0;
    right: 0;
  `}
`

const DetailsSectionContent = styled.div`
  padding: 1em 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint('tablet')`
    align-items: center;
  `}
  ${breakpoint('desktop')`
    padding: 2em 3em 0.5 3em;
    align-items: flex-start;
  `}
`

const PlaceListContainer = styled(DetailsSectionContent)`
  ${breakpoint('desktop')`
    padding-bottom: 0;
  `}
`

const WeatherDetailsContainer = styled(DetailsSectionContent)`
  padding-bottom: 2em;
`

export const DetailsSection = () => (
  <Container>
    <DetailsSectionContent>
      <Search />
    </DetailsSectionContent>
    <PlaceListContainer>
        <PlacesList />
    </PlaceListContainer>
    <WeatherDetailsContainer>
      <WeatherDetails />
    </WeatherDetailsContainer>
  </Container>
)