import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import { Row } from './Row'
import { useRecoilValue } from 'recoil'
import { selectedPlaceState } from '../state/atoms'
import breakpoint from 'styled-components-breakpoint'

const Container = styled.footer`
  width: 100%;
  background-color: #000000a3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  order: 3;
  ${breakpoint('desktop')`
    max-height: 65px;
    align-self: flex-end;
    justify-content: flex-start;
  `}
`

const CreditsContainer = styled(Row)`
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px 10px;
  flex-wrap: wrap;
`

const CreditsText = styled(Text)`
  font-size: 12px;
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

export const Credits = ({ props }) => {
  const { current } = useRecoilValue(selectedPlaceState)
  const weatherType = current.weather.main || 'Clouds'
  const { link, author } = photoCreditsMap[weatherType]
  return (
    <Container {...props}>
      <CreditsContainer>
        <CreditsText><a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/shots/7118235-Weather-DailyUI-037">Design inspiration</a> - Original design by <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/thearthurk">Arthur K</a></CreditsText>
      </CreditsContainer>
      <CreditsContainer>
        <CreditsText>Photo by <a target="_blank" rel="noopener noreferrer" href={link}>{author}</a></CreditsText>
      </CreditsContainer>
    </Container>
  )
}


