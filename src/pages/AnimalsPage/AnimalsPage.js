import React from 'react'

import { StyledAnimalsPage } from './AnimalsPage.styled'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import SnippetPost from '../../components/SnippetPost/SnippetPost'
import Pagination from '../../components/Pagination/Pagination'
import { useLocation, useParams } from 'react-router'
import { returnNewLocation, sortDocument } from '../../helper/helper'
import FilterByDateForm from '../../components/FilterByDateForm/FilterByDateForm'
import { Helmet } from 'react-helmet-async'

export const AnimalsPage = () => {
  const [document] = useAllPrismicDocumentsByType('post')
  const location = useLocation()
  const { pageNum, startDate, endDate } = useParams()

  const newLocation = returnNewLocation(location, startDate, endDate)

  const sortedThreats = React.useMemo(() => {
    return sortDocument(document, startDate, endDate)
  }, [document, endDate, startDate])

  return (
    sortedThreats ?
      <StyledAnimalsPage>
        <Helmet>
          <title>All Animals</title>
          <meta
            name={'All-animals'}
            content={'Display all animals'}
          />
        </Helmet>
        <FilterByDateForm />
        <Pagination
          limit={3}
          path={newLocation}
          pageNum={Number(pageNum)}
          startDate={startDate}
          endDate={endDate}
        >
          {
        sortedThreats.map(post => {
          return (
            <SnippetPost
              key={post.id}
              postInfo={post}
            />
          )
        })
          }
        </Pagination>
      </StyledAnimalsPage>
      :
      null
  )
}

export default AnimalsPage
