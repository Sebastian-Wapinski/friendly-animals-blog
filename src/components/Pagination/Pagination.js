import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagination, StyledNav, StyledUl, StyledLink } from './Pagination.styled'

export const Pagination = (props) => {
  const {
    children,
    limit = 3,
    path,
    pageNum,
    ...otherProps
  } = props

  const length = children && children.length
  const pages = Math.ceil((isNaN(length) ? 0 : length) / limit)

  const links = (new Array(pages).fill(0)).map((item, index) => {
    return (
      <li
        key={index}
      >
        <StyledLink
          to={`${path}/${index + 1}`}
        >
          {index + 1}
        </StyledLink>
      </li>
    )
  })

  const begin = limit * (pageNum - 1)
  const end = pageNum * limit

  return (
    children ?
      <StyledPagination
        {...otherProps}
      >
        {children.slice(begin, end)}
        <StyledNav>
          <StyledUl>{links}</StyledUl>
        </StyledNav>
      </StyledPagination>
      :
      null
  )
}

Pagination.propTypes = {
  children: PropTypes.node,
  limit: PropTypes.number,
  path: PropTypes.string,
  pageNum: PropTypes.number
}

export default Pagination
