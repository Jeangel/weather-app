import React from 'react'
import _ from 'lodash'
import { DateTime } from 'luxon'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import breakpoint from 'styled-components-breakpoint'
import { Row } from './Row'
import { Text } from './Text'
import { Column } from './Column'
import { WeatherIcon } from './WeatherIcon'
import { selectedPlaceState } from '../state/atoms'

const Background = styled.main`
  display: flex;
  padding: 0.2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  ${breakpoint('tablet')`
    padding: 3em;
    background-color: #000000a3;
  `}
  ${breakpoint('desktop')`
    align-items: flex-end;
    padding: 3em;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #000000a3;
  `}
`

const Container = styled(Column)`
  width: 100%;
  align-items: center;
  justify-content: center;
  ${breakpoint('tablet')`
    padding: 1em 1em;
  `}
  ${breakpoint('desktop')`
    align-items: flex-end;
    padding: 0 0 6em 10em;
    flex-direction: row;
    justify-content: flex-start;
  `}
`

const Degrees = styled(Text)`
  font-size: 4em;
  line-height: 0.8;
  font-weight: normal;
  text-align: center;
  margin-top: 10px;
  ${breakpoint('tablet')`
    margin-top: 0;
    font-size: 6em;
  `}
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
  align-items: center;
  ${breakpoint('desktop')`
    padding-top: 0;
    padding-left: 20px;
  `}
`

export const WeatherMainInformation = () => {
  const { current, location, time } = useRecoilValue(selectedPlaceState)
  const outFormat = 'hh:mm a - cccc, dd MMM yyyy'
  const inFormat = 'yyyy-MM-dd hh:mm:ss'
  const hasAllValues = !_.isEmpty(current) && !_.isEmpty(location)
  return (
    (hasAllValues && (
      <Container>
        <Background>
          <Degrees>{current.weather.temperature}°</Degrees>
          <LocationDetailsContainer>
            <Place>{location.name}, {location.country}</Place>
            <Text inline>{DateTime.fromFormat(time.formatted, inFormat).toFormat(outFormat)}</Text>
          </LocationDetailsContainer>
          <WeatherDescriptionContainer>
            <Row style={{ marginBottom: 10 }}>
              <WeatherIcon type={current.weather.main} size={40} />
            </Row>
            <Row>
              <Text>{current.weather.main }</Text>
            </Row>
          </WeatherDescriptionContainer>
        </Background>
      </Container>
    ))
  )
}