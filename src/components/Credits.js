import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import { Row } from './Row'

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
`

const PhotosByContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

const PhotosByText = styled(Text)`
  width: 100%;
  text-align: center;

`

export const Credits = () => (
  <Container>
    <CreditsContainer>
      <Text>Design by <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/thearthurk">Arthur K</a></Text>
    </CreditsContainer>
    <PhotosByContainer>
      <PhotosByText>Photos By</PhotosByText>
      <CreditsContainer>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@ninjason?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jason Leung</a></Text>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@nathananderson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Anderson</a></Text>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@neilrst?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Neil Rosenstech</a></Text>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@valentin_mueller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Valentin Müller</a></Text>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@eberhardgross?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">eberhard grossgasteiger</a></Text>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@samuel_s?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Samuel</a></Text>
        <Text><a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@florianolv?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Florian Olivo</a></Text>
      </CreditsContainer>
    </PhotosByContainer>
  </Container>
)


