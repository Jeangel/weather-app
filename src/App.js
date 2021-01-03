import React from 'react'
import './App.css'
import { Wrapper } from './components/Wrapper'
import { RecoilRoot } from 'recoil'
import { Credits } from './components/Credits'

const App = () => (
  <RecoilRoot>
    <Wrapper />
    <Credits />
  </RecoilRoot>
)

export default App


