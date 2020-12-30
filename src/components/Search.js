import React from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { Button } from './Button'
import { FaSearch } from 'react-icons/fa'

const Container = styled.div`
  padding: 2em 3em;
`

const SearchInput = styled(Input)`
  width: 100%;
`

const SearchInputContainer = styled.div`
  padding-right: 20px;
  width: 70%;
  display: inline-block;
`

export const Search = () => {
  return (
    <Container>
      <SearchInputContainer>
        <SearchInput placeholder='Search Places' />
      </SearchInputContainer>
      <Button>
        <FaSearch size={10} />
      </Button>
    </Container>
  )
}