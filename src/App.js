import React from 'react'
import './App.css'
import styled from 'styled-components'
import { WeatherMainInformation } from './components/WeatherMainInformation'
import { Search } from './components/Search'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/images/cloudy2.jpg");
  background-size: cover;
  background-position-y: center;
  display: flex;
  flex-direction: row;
`

const MainSection = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
`

const DetailsSection = styled.div`
  width: 30%;
  height: 100vh;
  position: absolute;
  background-position-x: right;
  background-position-y: center;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(15px); 
`

function App() {
  return (
    <Container>
      <MainSection>
        <WeatherMainInformation />
      </MainSection>
      <DetailsSection>
        <Search />
      </DetailsSection>
    </Container>
  )
}

export default App;
