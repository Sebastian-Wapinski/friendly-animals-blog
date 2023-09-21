import React from 'react'

import { StyledAnimalsPage } from './AnimalsPage.styled'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import SnippetPost from '../../components/SnippetPost/SnippetPost'
import Pagination from '../../components/Pagination/Pagination'
import { useLocation, useParams } from 'react-router'
import { sortDocument } from '../../helper/helper'

export const AnimalsPage = () => {
  const [document] = useAllPrismicDocumentsByType('post')
  const location = useLocation()
  const { pageNum } = useParams()

  const newLocation = location.pathname.slice(0, location.pathname.lastIndexOf('/'))

  const sortedThreats = React.useMemo(() => {
    return sortDocument(document)
  }, [document])

  return (
    sortedThreats ?
      <StyledAnimalsPage>
        <Pagination
          limit={3}
          path={newLocation}
          pageNum={Number(pageNum)}
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
