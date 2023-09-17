import React from 'react'
import PropTypes from 'prop-types'

import { StyledAnimalsPage } from './AnimalsPage.styled'
import { Outlet, useOutlet } from 'react-router-dom'

export const AnimalsPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const outlet = useOutlet()

  return (
    <StyledAnimalsPage
      {...otherProps}
    >
      {
        outlet ?
          <Outlet />
          :
          'Animals'
      }
    </StyledAnimalsPage>
  )
}

AnimalsPage.propTypes = {
  children: PropTypes.node
}

export default AnimalsPage
