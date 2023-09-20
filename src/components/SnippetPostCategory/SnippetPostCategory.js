import React from 'react'
import PropTypes from 'prop-types'

import { StyledSnippetPostCategory } from './SnippetPostCategory.styled'
import SnippetPost from '../SnippetPost/SnippetPost'
import { usePrismicDocumentByUID } from '@prismicio/react'

export const SnippetPostCategory = (props) => {
  const {
    categoryPost,
    ...otherProps
  } = props

  const [document] = usePrismicDocumentByUID('post', categoryPost.paste_links.uid)

  return (
    <StyledSnippetPostCategory
      {...otherProps}
    >
      {
        document ?
          <SnippetPost
            key={document.id}
            postInfo={document}
          />
          :
          null
      }
    </StyledSnippetPostCategory>
  )
}

SnippetPostCategory.propTypes = {
  categoryPost: PropTypes.object
}

export default SnippetPostCategory
