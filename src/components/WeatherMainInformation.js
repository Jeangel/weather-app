import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { useRecoilValue } from 'recoil'
import _ from 'lodash'
import { WiFog, WiDaySunny, WiSnow, WiRain, WiCloud } from 'react-icons/all'
import { selectedPlaceState } from '../state/atoms'
import { Row } from './Row'
import { Column } from './Column'
import { DateTime } from 'luxon'

const Text = styled.span`
  color: white;
  font-weight: lighter;
`

const Container = styled(Row)`
  width: 100%;
  padding: 6em 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${breakpoint('desktop')`
    align-items: flex-end;
    padding: 0 0 6em 10em;
    flex-direction: row;
    justify-content: flex-start;
  `}
`

const Degrees = styled(Text)`
  font-size: 6em;
  line-height: 0.8;
  font-weight: normal;
  text-align: center;
  ${breakpoint('desktop')`
    margin-right: 5px;
    text-align: left;
  `}
`

const Place = styled(Text)`
  font-size: 2em;
  font-weight: normal;
  margin-bottom: 5px;
  display: block;
  text-align: center;
  ${breakpoint('desktop')`
    text-align: left;
  `}
`

const LocationDetailsContainer = styled(Column)`
  padding-top: 1em;
  justify-content: center;
  align-items: center;
  ${breakpoint('desktop')`
    padding-top: 0;
    padding-left: 5px;
    padding-right: 5px;
    max-width: 60%;
    justify-content: initial;
    align-items: initial;
  `}
`

const WeatherDescriptionContainer = styled(Column)`
  padding-top: 1em;
  ${breakpoint('desktop')`
    padding-top: 0;
    padding-left: 20px;
  `}
`

const DegreesContainer = styled(Column)`
  width: 100%;
  align-items: center;
  justify-content: center;
  ${breakpoint('desktop')`
    width: auto;
    align-items: initial;
    justify-content: initial;
  `}
`

/**
 * Icon that describes the given weather type
 * @param {{
 *  type: string
 * }} props
 */
const WeatherIcon = ({ type = '' }) => {
  const props = { size: 40, color: 'white' }
  switch (type) {
    case 'Clear':
      return <WiDaySunny {...props} />
    case 'Clouds':
      return <WiCloud {...props} />
    case 'Rain':
      return <WiRain {...props} />
    case 'Snow':
      return <WiSnow {...props} />
    case 'Mist':
      return <WiFog {...props} />
    default:
      return <React.Fragment />
  }
}

export const WeatherMainInformation = () => {
  const place = useRecoilValue(selectedPlaceState)
  const inFormat = 'yyyy-MM-dd hh:mm:ss'
  const outFormat = 'hh:mm a - cccc, dd MMM yyyy'
  const hasAllValues = !_.isEmpty(place) && !_.isEmpty(place.weather) && !_.isEmpty(place.time)
  return (
    (hasAllValues && (
      <Container>
        <DegreesContainer>
          <Degrees>{place.weather.main.temp}°</Degrees>
        </DegreesContainer>
        <LocationDetailsContainer>
          <Place>{place.details.name}, {place.details.country}</Place>
          <Row>
            <Text>{DateTime.fromFormat(place.time.formatted, inFormat).toFormat(outFormat)}</Text>
          </Row>
        </LocationDetailsContainer>
        <WeatherDescriptionContainer>
          <Row style={{ marginBottom: 10 }}>
            <WeatherIcon type={_.first(place.weather.weather).main} />
          </Row>
          <Row>
            <Text>{_.first(place.weather.weather).main}</Text>
          </Row>
        </WeatherDescriptionContainer>
      </Container>
    ))
  )
}