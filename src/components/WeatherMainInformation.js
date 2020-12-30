import React from 'react'
import styled from 'styled-components'
import { Row } from './Row'
import { Column } from './Column'

const Text = styled.span`
  color: white;
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
`

const Place = styled(Text)`
  font-size: 2em;
  margin-bottom: 5px;
  display: block;
`

export const WeatherMainInformation = () => {
  return (
    <Container>
      <Row style={{ alignItems: 'flex-end' }}>
        <Column>
          <Degrees>16°</Degrees>
        </Column>
        <Column>
          <Place>London</Place>
          <Row>
            <Text>06:09 - Monday, 9 sep 2019</Text>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}