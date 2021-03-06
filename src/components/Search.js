import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Input } from './Input'
import { Button } from './Button'
import { FaSearch } from 'react-icons/fa'
import { searchPlaces } from '../api/weather'
import { useTypewriter } from '../hooks'
import { placesState } from '../state/atoms'
import { spinnerState } from '../state/atoms'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { cities } from '../data/capitals'

const Form = styled.form`
  width: 100%;
  align-items: center;
  display: flex;
  ${breakpoint('mobile')`
    justify-content: center;
  `}
  ${breakpoint('desktop')`
    justify-content: left;
  `}
`

const SearchInput = styled(Input)`
  width: 100%;
`

const SearchInputContainer = styled.div`
  padding-right: 20px;
  width: 70%;
  ${breakpoint('desktop')`
    width: 85%;
    max-width: 100%;
  `}
  display: inline-block;
  max-width: 200px;
`

const ButtonContainer = styled.div`
  display: inline-block;
`

export const Search = () => {
  const [filterValue, setFilterValue] = useState('')
  const placeholder = useTypewriter(cities)
  const setPlaces = useSetRecoilState(placesState);
  const [isSpinnerActive, setIsSpinnerActive] = useRecoilState(spinnerState);
  const search = async (e) => {
    e.preventDefault()
    setIsSpinnerActive(true)
    const newPlaces = await searchPlaces(filterValue)
    setPlaces(newPlaces)
    setIsSpinnerActive(false)
  }

  return (
    <Form onSubmit={search}>
        <SearchInputContainer>
          <SearchInput 
            placeholder={placeholder} 
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </SearchInputContainer>
        <ButtonContainer>
          <Button type='submit' disabled={isSpinnerActive || !filterValue}>
            <FaSearch size={10} />
          </Button>
        </ButtonContainer>
    </Form>
  )
}