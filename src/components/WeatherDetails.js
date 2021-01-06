import React from 'react'
import _ from 'lodash'
import { DateTime } from 'luxon'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Text } from './Text'
import { Row } from './Row'
import { WeatherIcon } from './WeatherIcon'
import { selectedPlaceState } from '../state/atoms'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const DetailsContainer = styled.div`
  ::before {
    content: "";
    border-top: 0.2px solid white;
    width: 100%;
    padding-bottom: 1.5em;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled(Text)`
  margin-bottom: 1.2em;
`

const RowItemContainer = styled(Row)`
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1em;
  ${breakpoint('tablet')`
    max-width: 200px
  `}

  ${breakpoint('desktop')`
    max-width: 100%
  `}
`

const RowItemLabelContainer = styled(Row)`
  align-items: center;
  justify-content: center;
`

/**
 * Used to display information row about the weather
 * @param {{
 *  label: string,
 *  value: string,
 *  icon: React.ReactNode
 * }} props 
 */
const RowItem = ({ label, value, icon }) => {
  return (
    <RowItemContainer>
      <RowItemLabelContainer>
        {icon}
        <Text style={{ marginLeft: 4 }}>{label}</Text>
      </RowItemLabelContainer>
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
      <DetailsContainer>
        <Title weight='bold'>Weather Details</Title>
        <RowItem label='Cloudy' value={`${current.clouds}%`} />
        <RowItem label='Humidity' value={`${current.humidity}%`} />
        <RowItem label='Wind' value={`${current.wind_speed}km/h`} />
        {!_.isEmpty(current.rain) && <RowItem label='Rain' value={`${current.rain['1h']}mm`} />}
      </DetailsContainer>
      <DetailsContainer>
        <Title weight='bold'>Next Days</Title>
        {daily.map((e, i) => (
          <RowItem
            key={i}
            label={DateTime.fromSeconds(e.dt).toFormat('cccc')}
            icon={<WeatherIcon type={e.weather.main} size={20} />}
            value={`${e.weather.temperature.day} °`}
          />
        ))}
      </DetailsContainer>
    </Container>
  )
}