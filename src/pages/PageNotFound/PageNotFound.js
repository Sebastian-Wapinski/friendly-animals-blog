import React from 'react'

import { StyledPageNotFound, StyledParagraph, StyledButton } from './PageNotFound.styled'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <StyledPageNotFound>
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name={'Page Not Found'}
          content={'Page Not Found'}
        />
      </Helmet>
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
