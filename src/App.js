import React from 'react'
import './App.css'
import styled from 'styled-components'
import { DetailsSection } from './components/DetailsSection'
import { MainSection } from './components/MainSection'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/images/cloudy2.jpg");
  background-size: cover;
  background-position-y: center;
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <React.Fragment>
      <Container>
        <MainSection />
        <DetailsSection />
      </Container>
    </React.Fragment>
  )
}

export default App;
