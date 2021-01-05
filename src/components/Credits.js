import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import { Row } from './Row'
import { useRecoilValue } from 'recoil'
import { selectedPlaceState } from '../state/atoms'

const Container = styled.footer`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`

const CreditsContainer = styled(Row)`
  width: 100%;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  flex-wrap: wrap;
`

const PhotosByContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 0;
`

const PhotosByText = styled(Text)`
  width: 100%;
  text-align: center;

`

const photoCreditsMap = {
  'Clear': {
    link: 'https://unsplash.com/@neilrst?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
    author: 'Neil Rosenstech',
  },
  'Clouds': {
    link: 'https://unsplash.com/@matthiasoberholzer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
    author: 'Matthias Oberholzer'
  },
  'Mist': {
    link: 'https://unsplash.com/@matthiasoberholzer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
    author: 'Harald Pliessnig'
  },
  'Fog': {
    link: 'https://unsplash.com/@brandaohh?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
    author: 'Branimir Balogović'
  },
  'Rain': {
    link: 'https://unsplash.com/@valentin_mueller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
    author: 'Valentin Müller'
  },
  'Snow': {
    link: 'https://unsplash.com/@samuel_s?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
    author: 'Samuel'
  }
}

export const Credits = () => {
  const { current } = useRecoilValue(selectedPlaceState)
  const weatherType = current.weather.main || 'Clouds'
  const { link, author } = photoCreditsMap[weatherType]
  return (
    <Container>
      <CreditsContainer>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/shots/7118235-Weather-DailyUI-037">Design inspiration</a> - Original design by <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/thearthurk">Arthur K</a></Text>
      </CreditsContainer>
      <CreditsContainer>
        <Text>Photo by <a target="_blank" rel="noopener noreferrer" href={link}>{author}</a></Text>
      </CreditsContainer>
    </Container>
  )
}


