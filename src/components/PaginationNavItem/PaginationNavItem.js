import React from 'react'
import PropTypes from 'prop-types'

import { StyledPaginationNavItem, StyledLink } from './PaginationNavItem.styled'

export const PaginationNavItem = (props) => {
  const {
    startDate,
    endDate,
    path,
    index
  } = props

  return (
    <StyledPaginationNavItem>
      {
        startDate && endDate ?
          <StyledLink
            to={`${path}/${index + 1}/${startDate}/${endDate}`}
          >
            {index + 1}
          </StyledLink>
          :
          <StyledLink
            to={`${path}/${index + 1}`}
          >
            {index + 1}
          </StyledLink>
      }
    </StyledPaginationNavItem>
  )
}

PaginationNavItem.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number
}

export default PaginationNavItem
