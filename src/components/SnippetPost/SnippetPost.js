import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledSnippetPost,
  StyledContainer,
  StyledImgContainer,
  StyledImg,
  StyledInfo,
  StyledTitle,
  StyledParagraph,
  StyledDate
} from './SnippetPost.styled'

export const SnippetPost = (props) => {
  const {
    postInfo
  } = props

  const {
    uid,
    slugs,
    imageUrl,
    title,
    shortIntroduction,
    creationDate
  } = postInfo

  return (
    postInfo ?
      <StyledSnippetPost
        to={`/animal/${uid}/${slugs}`}
      >
        <StyledContainer>
          <StyledImgContainer>
            <StyledImg
              src={imageUrl}
            />
          </StyledImgContainer>
          <StyledInfo>
            <StyledTitle>
              {title}
            </StyledTitle>
            <StyledParagraph>
              {shortIntroduction}
            </StyledParagraph>
            <StyledDate>
              {creationDate}
            </StyledDate>
          </StyledInfo>
        </StyledContainer>
      </StyledSnippetPost>
      :
      null
  )
}

SnippetPost.propTypes = {
  postInfo: PropTypes.object
}

export default SnippetPost
