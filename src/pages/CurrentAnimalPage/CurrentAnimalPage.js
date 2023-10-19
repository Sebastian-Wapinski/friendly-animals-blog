import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledCurrentAnimalPage,
  StyledBackButton,
  StyledImgContainer,
  StyledImg,
  StyledInfo,
  StyledTitle,
  StyledShortText,
  StyledContent,
  StyledPublicationDate
} from './CurrentAnimalPage.styled'

import { usePrismicDocumentByUID } from '@prismicio/react'
import { useNavigate, useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'

export const CurrentAnimalPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { uid } = useParams()
  const [document] = usePrismicDocumentByUID('post', uid)

  const navigate = useNavigate()

  return (
    document ?
      <StyledCurrentAnimalPage
        {...otherProps}
      >
        <Helmet>
          <title>{document.data.title_post[0].text}</title>
          <meta
            name={`${document.data.title_post[0].text}`}
            content={'Displays current post'}
          />
        </Helmet>
        <StyledBackButton
          onClick={() => navigate(-1)}
        >
          GO BACK
        </StyledBackButton>
        <StyledImgContainer
          width={document.data.image_post.dimensions.width}
          height={document.data.image_post.dimensions.height}
        >
          <StyledImg
            src={document.data.image_post.url}
          />
        </StyledImgContainer>
        <StyledInfo>
          <StyledTitle>
            {document.data.title_post[0].text}
          </StyledTitle>
          <StyledShortText>
            {document.data.short_introduction}
          </StyledShortText>
          {
            document.data.content_post.map((paragraph, index) => {
              return (
                <StyledContent
                  key={index}
                >
                  {paragraph.text}
                </StyledContent>
              )
            })
          }
          <StyledPublicationDate>
            {document.data.date}
          </StyledPublicationDate>
        </StyledInfo>
      </StyledCurrentAnimalPage>
      :
      null
  )
}

CurrentAnimalPage.propTypes = {
  children: PropTypes.node
}

export default CurrentAnimalPage
