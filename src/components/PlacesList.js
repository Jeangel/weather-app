import React from 'react'
import { useRecoilValue } from 'recoil'
import { atomPlaces } from '../state/atoms'

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
  const places = useRecoilValue(atomPlaces);
  // TODO, style this stuff... add abiltiy to 'select' a location to update the main thing
  // add weather details section
  console.log(places)
  return (
    <div>
      {places.map((e) => (
        <p style={{color: 'white'}}>{e.name}, {e.country} {e.state}</p>
      ))}
    </div>
  )
}