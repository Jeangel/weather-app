import React from 'react'
import { useRecoilValue } from 'recoil'
import _ from 'lodash'
import { placesState } from '../state/atoms'
import { PlaceItem } from './PlaceItem'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Container = styled.div`
  width: 100%;
  ${breakpoint('desktop')`
    height: 220px;
  `};
`

export const PlacesList = () => {
  const places = useRecoilValue(placesState);
  const uniquePlaces = _.uniqBy(places, (e) => e.country.concat(e.name))
  return (
    <Container>
      {uniquePlaces.map((e, i) => (
          <PlaceItem place={e} key={i} />
      ))}
    </Container>
  )
}