import React from 'react'
import PropTypes from 'prop-types'

import { StyledFilteredTypeData } from './FilteredTypeData.styled'

export const FilteredTypeData = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledFilteredTypeData
      {...otherProps}
    >
      StyledFilteredTypeData
      {children}
    </StyledFilteredTypeData>
  )
}

FilteredTypeData.propTypes = {
  children: PropTypes.node
}

export default FilteredTypeData
