import React from 'react'
import PropTypes from 'prop-types'

import { StyledAnimalTypePage } from './AnimalTypePage.styled'
import { useLocation, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByTag } from '@prismicio/react'
import Pagination from '../../components/Pagination/Pagination'
import SnippetPost from '../../components/SnippetPost/SnippetPost'

export const AnimalTypePage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const elem = useParams()

  const [document] = useAllPrismicDocumentsByTag(elem.animalType)

  const location = useLocation()
  const newLocation = location.pathname.slice(0, location.pathname.lastIndexOf('/'))

  return (
    <StyledAnimalTypePage
      {...otherProps}
    >
      <Pagination
        limit={3}
        path={newLocation}
        pageNum={Number(elem.animalPageNum)}
      >
        {
          document ?
            document.map(post => {
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
