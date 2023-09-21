import React from 'react'
import PropTypes from 'prop-types'

import { StyledFilteredAllData } from './FilteredAllData.styled'

export const FilteredAllData = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledFilteredAllData
      {...otherProps}
    >
      StyledFilteredAllData
      {children}
    </StyledFilteredAllData>
  )
}

FilteredAllData.propTypes = {
  children: PropTypes.node
}

export default FilteredAllData
