import React from 'react'
import PropTypes from 'prop-types'

import { StyledAnimalTypePage } from './AnimalTypePage.styled'
import { NavLink, useLocation, useParams } from 'react-router-dom'

export const AnimalTypePage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const elem = useParams()
  const location = useLocation()

  console.log(elem)
  console.log(location)

  return (
    <StyledAnimalTypePage
      {...otherProps}
    >
      <NavLink to={`${location.pathname}/${elem.animalType}-3`}>{elem.animalType}</NavLink>
    </StyledAnimalTypePage>
  )
}

AnimalTypePage.propTypes = {
  children: PropTypes.node
}

export default AnimalTypePage
