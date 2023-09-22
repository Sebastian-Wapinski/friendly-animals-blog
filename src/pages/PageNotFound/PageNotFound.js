import React from 'react'

import { StyledPageNotFound, StyledParagraph, StyledButton } from './PageNotFound.styled'
import { useNavigate } from 'react-router'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <StyledPageNotFound>
      <StyledParagraph>
        Page-Not-Found
      </StyledParagraph>
      <StyledButton
        onClick={() => {
          navigate('/')
        }}
      >
        GO HOME PAGE
      </StyledButton>
    </StyledPageNotFound>
  )
}

export default PageNotFound
