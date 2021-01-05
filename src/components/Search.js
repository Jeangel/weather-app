import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Input } from './Input'
import { Button } from './Button'
import { FaSearch } from 'react-icons/fa'
import { searchPlaces } from '../api/weather'
import { placesState } from '../state/atoms'
import { spinnerState } from '../state/atoms'
import { useRecoilState, useSetRecoilState } from 'recoil'

const Container = styled.div`
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
  const setPlaces = useSetRecoilState(placesState);
  const [isSpinnerActive, setIsSpinnerActive] = useRecoilState(spinnerState);
  const search = async () => {
    setIsSpinnerActive(true)
    const newPlaces = await searchPlaces(filterValue)
    setPlaces(newPlaces)
    setIsSpinnerActive(false)
  }

  return (
    <Container>
      <SearchInputContainer>
        <SearchInput 
          placeholder='Search Places' 
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </SearchInputContainer>
      <ButtonContainer>
        <Button onClick={search} disabled={isSpinnerActive || !filterValue}>
          <FaSearch size={10} />
        </Button>
      </ButtonContainer>
    </Container>
  )
}