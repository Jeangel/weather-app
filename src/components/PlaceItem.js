import React, { useState } from 'react'
import styled from 'styled-components'
import { fetchFullLocationWeatherDetails } from '../api/weather'
import { useSetRecoilState } from 'recoil'
import { selectedPlaceState, placesState, spinnerState } from '../state/atoms'

/**
 * @typedef {object} Place
 * @prop {string} name
 * @prop {string} country
 * @prop {string} state
 * @prop {string} lat
 * @prop {string} lon
 */

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 1.5em;
  cursor: pointer;
`

const CountryImage = styled.img`
  margin-right: 10px;
`

const PlaceDescription = styled.span`
  color: ${({ isBeingHovered }) => isBeingHovered ? 'white' : 'lightgray'};
  font-weight: lighter;
`

/**
 * Item displayed per each result in the place list component
 * @param {{ 
 *  place: Place
 * }} props
 */
export const PlaceItem = ({ place }) => {
  const { country, name, state } = place
  const [isHovered, setIsHovered] = useState(false)
  const setSelectedPlace = useSetRecoilState(selectedPlaceState)
  const setPlaces = useSetRecoilState(placesState)
  const setSpinnerIsActive = useSetRecoilState(spinnerState)
  const handleClick = async () => {
    setSpinnerIsActive(true)
    const locationWeatherDetails = await fetchFullLocationWeatherDetails({ lat: place.lat, lon: place.lon })
    setSelectedPlace({ ...locationWeatherDetails, location: place })
    setPlaces([])
    setSpinnerIsActive(false)
  }
  const countryFlagUrl = `https://www.countryflags.io/${country.toLowerCase()}/flat/24.png`
  return (
    <Container 
      onClick={handleClick} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <CountryImage src={countryFlagUrl} alt={`${country} flag`} />
      <PlaceDescription isBeingHovered={isHovered}>
        {name}, {country} {state}
      </PlaceDescription>
    </Container>
  )
}
