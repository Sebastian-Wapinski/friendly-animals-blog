import React from 'react'
import PropTypes from 'prop-types'

import { StyledAnimalTypePage } from './AnimalTypePage.styled'
import { useLocation, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByTag } from '@prismicio/react'
import Pagination from '../../components/Pagination/Pagination'
import SnippetPost from '../../components/SnippetPost/SnippetPost'
import { sortDocument } from '../../helper/helper'
import FilterByDateForm from '../../components/FilterByDateForm/FilterByDateForm'
import { Helmet } from 'react-helmet-async'

export const AnimalTypePage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const elem = useParams()
  const { startDate, endDate } = elem

  const [document] = useAllPrismicDocumentsByTag(elem.animalType)

  const location = useLocation()

  let newLocation
  if (typeof startDate === 'undefined' && typeof endDate === 'undefined') {
    newLocation = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
  } else {
    const deletingEnd = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
    const deletingStart = deletingEnd.slice(0, deletingEnd.lastIndexOf('/'))
    const deletingPageNum = deletingStart.slice(0, deletingStart.lastIndexOf('/'))
    newLocation = deletingPageNum
  }

  const sortedThreats = React.useMemo(() => {
    return sortDocument(document, startDate, endDate)
  }, [document, endDate, startDate])

  return (
    <StyledAnimalTypePage
      {...otherProps}
    >
      <Helmet>
        <title>{elem.animalType}</title>
        <meta
          name={elem.animalType}
          content={`Displays bookmark ${elem.animalType}`}
        />
      </Helmet>
      <FilterByDateForm />
      <Pagination
        limit={3}
        path={newLocation}
        pageNum={Number(elem.animalPageNum)}
        startDate={startDate}
        endDate={endDate}
      >
        {
          sortedThreats ?
            sortedThreats.map(post => {
              return (
                <SnippetPost
                  key={post.id}
                  postInfo={post}
                />
              )
            }) :
            null
        }
      </Pagination>
    </StyledAnimalTypePage>
  )
}

AnimalTypePage.propTypes = {
  children: PropTypes.node
}

export default AnimalTypePage
