import styled from 'styled-components'

export const StyledText = styled.p`
  color: white;
  font-weight: ${({ weight }) => weight === 'bold' ? 'normal' : 'lighter'};
  display: ${({ inline }) => inline ? 'inline' : 'block'};
`

/**
 * @param {{
  *  weight?: 'title' | 'body',
  *  inline?: boolean
  * }} props
  */
export const Text = ({ weight, inline, children, ...rest }) => (
  <StyledText weight={weight} inline={inline} {...rest}>
    {children}
  </StyledText>
)
