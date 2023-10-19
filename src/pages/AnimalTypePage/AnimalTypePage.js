import React from 'react'

import { StyledAnimalTypePage } from './AnimalTypePage.styled'
import { useLocation, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByTag } from '@prismicio/react'
import Pagination from '../../components/Pagination/Pagination'
import SnippetPost from '../../components/SnippetPost/SnippetPost'
import { returnNewLocation, sortDocument } from '../../helper/helper'
import FilterByDateForm from '../../components/FilterByDateForm/FilterByDateForm'
import { Helmet } from 'react-helmet-async'

export const AnimalTypePage = () => {
  const elem = useParams()
  const { startDate, endDate } = elem

  const [document] = useAllPrismicDocumentsByTag(elem.animalType)

  const location = useLocation()
  const newLocation = returnNewLocation(location, startDate, endDate)

  const sortedThreats = React.useMemo(() => {
    return sortDocument(document, startDate, endDate)
  }, [document, endDate, startDate])

  return (
    <StyledAnimalTypePage>
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

export default AnimalTypePage
