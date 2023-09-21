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
    postInfo,
    ...otherProps
  } = props

  return (
    postInfo ?
      <StyledSnippetPost
        to={`/animal/${postInfo.uid}/${postInfo.slugs}`}
        {...otherProps}
      >
        <StyledContainer>
          <StyledImgContainer>
            <StyledImg
              src={postInfo.data.image_post.url}
            />
          </StyledImgContainer>
          <StyledInfo>
            <StyledTitle>
              {postInfo.data.title_post[0].text}
            </StyledTitle>
            <StyledParagraph>
              {postInfo.data.short_introduction}
            </StyledParagraph>
            <StyledDate>
              {postInfo.data.date}
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
