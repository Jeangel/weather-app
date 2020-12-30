import React from 'react'
import { useRecoilValue } from 'recoil'
import _ from 'lodash'
import { placesState } from '../state/atoms'
import { PlaceItem } from './PlaceItem';

/**
 * @typedef {object} Place
 * @prop {string} name
 * @prop {string} country
 * @prop {string} state
 */


export const PlacesList = () => {
  /**
   * @type {Place[]}
   */
  const places = useRecoilValue(placesState);
  // TODO, style this stuff... add abiltiy to 'select' a location to update the main thing
  // add weather details section
  const uniquePlaces = _.uniqBy(places, (e) => e.country.concat(e.name))
  return (
    <div>
      {uniquePlaces.map((e, i) => (
        <PlaceItem place={e} key={i} />
      ))}
    </div>
  )
}