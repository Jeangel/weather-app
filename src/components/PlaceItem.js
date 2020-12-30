import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

/**
 * @typedef {object} Place
 * @prop {string} name
 * @prop {string} country
 * @prop {string} state
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
`

/**
 * Item displayed per each result in the place list component
 * @param {{ 
 *  place: Place
 * }} props
 */
export const PlaceItem = ({ place, onClick }) => {
  const { country, name, state } = place
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    if (onClick && _.isFunction(onClick)) {
      onClick(place)
    }
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
