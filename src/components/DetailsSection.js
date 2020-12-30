import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Search } from './Search'
import { PlacesList } from './PlacesList'

const Container = styled.div`
  width: 100%;
  backdrop-filter: blur(15px);
  ${breakpoint('desktop')`
    position: absolute;
    width: 30%;
    height: 100vh;
    background-position-x: right;
    background-position-y: center;
    bottom: 0;
    right: 0;
  `}
`

const DetailsSectionContent = styled.div`
  padding: 1em 3em;
  align-items: center;
  justify-content: center;
  display: flex;
  ${breakpoint('desktop')`
    padding: 2em 3em;
  `}
`

export const DetailsSection = () => (
  <Container>
    <DetailsSectionContent>
      <Search />
    </DetailsSectionContent>
    <DetailsSectionContent>
      <PlacesList />
    </DetailsSectionContent>
  </Container>
)