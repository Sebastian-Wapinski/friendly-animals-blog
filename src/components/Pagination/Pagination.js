import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagination, StyledNav, StyledUl, StyledLink } from './Pagination.styled'
import { useNavigate } from 'react-router'

export const Pagination = (props) => {
  const {
    children,
    limit = 3,
    path,
    pageNum,
    startDate,
    endDate,
    ...otherProps
  } = props

  const length = children && children.length
  let pages = Math.ceil((isNaN(length) ? 0 : length) / limit)

  const navigate = useNavigate()
  React.useEffect(() => {
    const regex = /^\d{4}-\d{2}-\d{2}$/

    if (pages === 0) pages++
    if (isNaN(Number(pageNum)) || Number(pageNum) > pages || (startDate && !startDate.match(regex)) || (endDate && !endDate.match(regex))) {
      return navigate(`${path}/1`)
    }
  }, [endDate, navigate, pageNum, pages, path, startDate])

  const links = (new Array(pages).fill(0)).map((item, index) => {
    return (
      <li
        key={index}
      >
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
  pageNum: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string
}

export default Pagination
