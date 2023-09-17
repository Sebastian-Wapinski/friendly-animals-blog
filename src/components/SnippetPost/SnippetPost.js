import React from 'react'
import PropTypes from 'prop-types'

import { StyledSnippetPost } from './SnippetPost.styled'
import { usePrismicDocumentByUID } from '@prismicio/react'

export const SnippetPost = (props) => {
  const {
    postInfo,
    ...otherProps
  } = props

  const [document] = usePrismicDocumentByUID('post', postInfo.paste_links.uid)

  console.log(document)

  return (
    <StyledSnippetPost
      {...otherProps}
    >
      {
        document && document.data.date
      }
    </StyledSnippetPost>
  )
}

SnippetPost.propTypes = {
  postInfo: PropTypes.object
}

export default SnippetPost
