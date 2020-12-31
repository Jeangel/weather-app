import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import breakpoint from 'styled-components-breakpoint'
import { selectedPlaceState } from '../state/atoms'
import { DetailsSection } from './DetailsSection'
import { MainSection } from './MainSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: ${({ backgroundImageName }) => `url("/images/${backgroundImageName}.jpg")`};
  background-size: cover;
  background-position-y: center;
  ${breakpoint('desktop')`
    flex-direction: row;
  `}
`

const Main = styled(MainSection)`
  order: 2;
  display: flex;
`

export const Wrapper = () => {
  const selectedPlace = useRecoilValue(selectedPlaceState)
  const weatherType = _.get(selectedPlace, 'weather.details.main', 'Clouds')
  return (
    <React.Fragment>
      <Container backgroundImageName={weatherType}>
        <Main />
        <DetailsSection />
      </Container>
    </React.Fragment>
  )
}
