import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { selectedPlaceState, spinnerState } from '../state/atoms'
import { DetailsSection } from './DetailsSection'
import { MainSection } from './MainSection'
import { Credits } from './Credits'
import { GlobalSpinner } from './GlobalSpinner'
import Clear from '../images/Clear.jpg'
import Clouds from '../images/Clouds.jpg'
import Fog from '../images/Fog.jpg'
import Mist from '../images/Mist.jpg'
import Rain from '../images/Rain.jpg'
import Snow from '../images/Snow.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position-y: center;
`

const Main = styled(MainSection)`
  order: 2;
  display: flex;
`

const weatherTypeImageMap = {
  'Clear': Clear,
  'Clouds': Clouds,
  'Fog': Fog,
  'Mist': Mist,
  'Rain': Rain,
  'Snow': Snow

}

export const Wrapper = () => {
  const { current } = useRecoilValue(selectedPlaceState)
  const isSpinnerActive = useRecoilValue(spinnerState)
  const weatherType = current.weather.main || 'Clouds'
  return (
    <React.Fragment>
      <GlobalSpinner active={isSpinnerActive} />
      <Container backgroundImage={weatherTypeImageMap[weatherType]}>
        <Main />
        <DetailsSection />
        <Credits />
      </Container>
    </React.Fragment>
  )
}
