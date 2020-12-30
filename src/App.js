import React from 'react'
import './App.css'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { DetailsSection } from './components/DetailsSection'
import { MainSection } from './components/MainSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: url("/images/cloudy2.jpg");
  background-size: cover;
  background-position-y: center;
  ${breakpoint('desktop')`
    flex-direction: row;
  `}
`

const Main = styled(MainSection)`
  order: 2;
  display: flex;
`

function App() {
  return (
    <React.Fragment>
      <Container>
        <Main />
        <DetailsSection />
      </Container>
    </React.Fragment>
  )
}

export default App;
