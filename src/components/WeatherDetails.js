import React from 'react'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Text } from './Text'
import { Row } from './Row'
import { selectedPlaceState } from '../state/atoms'

const Container = styled.div`
  ::before {
    content: "";
    border-top: 0.2px solid white;
    width: 100%;
    padding-bottom: 2em;
  }
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
`

const Title = styled(Text)`
  margin-bottom: 2em;
`

const RowItemContainer = styled(Row)`
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.5em;
  ${breakpoint('tablet')`
    max-width: 200px
  `}

  ${breakpoint('desktop')`
    max-width: 100%
  `}
`

/**
 * Used to display information row about the weather
 * @param {{
 *  label: string,
 *  value: string
 * }} props 
 */
const RowItem = ({ label, value }) => {
  return (
    <RowItemContainer>
      <Text>{label}</Text>
      <Text weight='bold'>{value}</Text>
    </RowItemContainer>
  )
}

export const WeatherDetails = () => {
  const { current, daily } = useRecoilValue(selectedPlaceState)
  if (_.isEmpty(current) || _.isEmpty(daily)) {
    return <React.Fragment />
  }
  return (
    <Container>
      <Title weight='bold'>Weather Details</Title>
      <RowItem label='Cloudy' value={`${current.clouds}%`} />
      <RowItem label='Humidity' value={`${current.humidity}%`} />
      <RowItem label='Wind' value={`${current.wind_speed}km/h`} />
      {!_.isEmpty(current.rain) && <RowItem label='Rain' value={`${current.rain['1h']}mm`} />}
    </Container>
  )
}