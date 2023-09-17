import React from 'react'
import PropTypes from 'prop-types'

import { StyledCurrentAnimalPage } from './CurrentAnimalPage.styled'

export const CurrentAnimalPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledCurrentAnimalPage
      {...otherProps}
    >
      existing
    </StyledCurrentAnimalPage>
  )
}

CurrentAnimalPage.propTypes = {
  children: PropTypes.node
}

export default CurrentAnimalPage
