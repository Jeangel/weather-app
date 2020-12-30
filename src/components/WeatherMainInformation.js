import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import _ from 'lodash'
import { WiFog, WiDaySunny, WiSnow, WiRain, WiCloud } from 'react-icons/all'
import { selectedPlaceState } from '../state/atoms'
import { Row } from './Row'
import { Column } from './Column'

const Text = styled.span`
  color: white;
  font-weight: lighter;
`

const Container = styled(Row)`
  width: 100%;
  align-items: center;
  padding: 0 0 6em 10em;
`

const Degrees = styled(Text)`
  font-size: 6em;
  line-height: 0.8;
  margin-right: 5px;
  font-weight: normal;
`

const Place = styled(Text)`
  font-size: 2em;
  font-weight: normal;
  margin-bottom: 5px;
  display: block;
`

const LocationDetailsContainer = styled(Column)`
  padding-left: 5px;
  padding-right: 5px;
`

const WeatherDescriptionContainer = styled(Column)`
  padding-left: 20px;
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
  return (
    <Container>
      {(!_.isEmpty(place) && !_.isEmpty(place.weather)) && (
        <Row style={{ alignItems: 'flex-end' }}>
          <Column>
            <Degrees>{place.weather.main.temp}°</Degrees>
          </Column>
          <LocationDetailsContainer>
            <Place>{place.details.name}, {place.details.country}</Place>
            <Row>
              <Text>06:09 - Monday, 9 sep 2019</Text>
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
        </Row>
      )}
    </Container>
  )
}