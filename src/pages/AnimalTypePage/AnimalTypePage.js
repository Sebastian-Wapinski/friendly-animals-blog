import React from 'react'
import PropTypes from 'prop-types'

import { StyledAnimalTypePage } from './AnimalTypePage.styled'
import { useLocation, useParams } from 'react-router-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import Pagination from '../../components/Pagination/Pagination'
import SnippetPostCategory from '../../components/SnippetPostCategory/SnippetPostCategory'

export const AnimalTypePage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const elem = useParams()

  const [document] = usePrismicDocumentByUID('category', elem.animalType)

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
            document.data.animal_group.map(categoryPost => {
              return (
                <SnippetPostCategory
                  key={categoryPost.paste_links.id}
                  categoryPost={categoryPost}
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
