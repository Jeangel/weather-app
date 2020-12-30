import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { Button } from './Button'
import { FaSearch } from 'react-icons/fa'
import { searchPlaces } from '../api/weather'
import { placesState } from '../state/atoms'
import { spinnerState } from '../state/atoms'
import { useRecoilState, useSetRecoilState } from 'recoil'

const SearchInput = styled(Input)`
  width: 100%;
`

const SearchInputContainer = styled.div`
  padding-right: 20px;
  width: 70%;
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
    <React.Fragment>
      <SearchInputContainer>
        <SearchInput 
          placeholder='Search Places' 
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </SearchInputContainer>
      <Button onClick={search} disabled={isSpinnerActive}>
        <FaSearch size={10} />
      </Button>
    </React.Fragment>
  )
}