import React from 'react'

import { StyledAnimalsPage } from './AnimalsPage.styled'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import SnippetPost from '../../components/SnippetPost/SnippetPost'
import Pagination from '../../components/Pagination/Pagination'
import { useLocation, useParams } from 'react-router'

export const AnimalsPage = () => {
  const [document] = useAllPrismicDocumentsByType('post')
  const location = useLocation()
  const { pageNum } = useParams()

  const sortedThreats = document && document
    .map(post => {
      return {
        ...post,
        createdNewDate: new Date(post.data.date)
      }
    })
    .sort((a, b) => {
      return Number(b.createdNewDate) - Number(a.createdNewDate)
    })

  const newLocation = location.pathname.slice(0, location.pathname.lastIndexOf('/'))

  return (
    <StyledAnimalsPage>
      <Pagination
        limit={3}
        path={newLocation}
        pageNum={Number(pageNum)}
      >
        {
        sortedThreats && sortedThreats.map(post => {
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
  )
}

export default AnimalsPage
