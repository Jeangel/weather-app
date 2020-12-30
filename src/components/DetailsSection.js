import React from 'react'
import styled from 'styled-components'
import { Search } from './Search'
import { PlacesList } from './PlacesList'

const Container = styled.div`
  width: 30%;
  height: 100vh;
  position: absolute;
  background-position-x: right;
  background-position-y: center;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(15px); 
`

const DetailsSectionContent = styled.div`
  padding: 2em 3em;
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