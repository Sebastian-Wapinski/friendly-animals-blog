import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagination, StyledNav, StyledUl, StyledError } from './Pagination.styled'
import { useNavigate } from 'react-router'
import PaginationNavItem from '../PaginationNavItem/PaginationNavItem'

export const Pagination = (props) => {
  const {
    children,
    limit = 3,
    path,
    pageNum,
    startDate,
    endDate
  } = props

  const [error, setError] = React.useState(false)

  const calculatePagesAmount = () => {
    return Math.ceil((isNaN(length) ? 0 : length) / limit)
  }

  const length = children && children.length
  const pages = calculatePagesAmount()

  const navigate = useNavigate()

  const isPathCorrect = React.useCallback((pageNum, startDate, endDate) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    setError(false)

    if (pages === 0) {
      setError(true)
      return null
    }

    if (isNaN(Number(pageNum)) || pageNum > pages || pageNum <= 0 || (startDate && !startDate.match(regex)) || (endDate && !endDate.match(regex))) {
      return navigate('*')
    }
  }, [navigate, pages])

  React.useEffect(() => {
    isPathCorrect(pageNum, startDate, endDate)
  }, [endDate, isPathCorrect, navigate, pageNum, pages, path, startDate])

  const links = (new Array(pages).fill(0)).map((item, index) => {
    return (
      <PaginationNavItem
        key={`${index}/PaginationNavItem`}
        startDate={startDate}
        endDate={endDate}
        path={path}
        index={index}
      />
    )
  })

  const begin = limit * (pageNum - 1)
  const end = pageNum * limit

  return (
    children ?
      <StyledPagination>
        {children.slice(begin, end)}
        {error ? <StyledError>No Data</StyledError> : null}
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
