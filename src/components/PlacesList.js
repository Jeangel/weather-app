import React from 'react'
import { useRecoilValue } from 'recoil'
import _ from 'lodash'
import { placesState } from '../state/atoms'
import { PlaceItem } from './PlaceItem'

export const PlacesList = () => {
  const places = useRecoilValue(placesState);
  const uniquePlaces = _.uniqBy(places, (e) => e.country.concat(e.name))
  return (
    <div>
      {uniquePlaces.map((e, i) => (
          <PlaceItem place={e} key={i} />
      ))}
    </div>
  )
}