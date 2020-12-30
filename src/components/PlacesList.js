import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import _ from 'lodash'
import { BarLoader } from 'react-spinners'
import { placesState, spinnerState } from '../state/atoms'
import { PlaceItem } from './PlaceItem'

const SpinnerContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const PlacesList = () => {
  const places = useRecoilValue(placesState);
  const shouldShowSpinner = useRecoilValue(spinnerState);
  // TODO, style this stuff... add abiltiy to 'select' a location to update the main thing
  // add weather details section
  const uniquePlaces = _.uniqBy(places, (e) => e.country.concat(e.name))
  return (
    <div>
      {shouldShowSpinner ? (
        <SpinnerContainer>
          <BarLoader size={60} color={'white'} />
        </SpinnerContainer>
      ) : (
        uniquePlaces.map((e, i) => (
          <PlaceItem place={e} key={i} />
        ))
      )}
    </div>
  )
}