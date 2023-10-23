import React from 'react'

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
import { getUsefulData } from '../../helper/helper'

export const CurrentAnimalPage = () => {
  const { uid } = useParams()

  const [document] = usePrismicDocumentByUID('post', uid)

  const navigate = useNavigate()

  if (!document) return null

  const {
    imageUrl,
    title,
    shortIntroduction,
    creationDate,
    width,
    height,
    paragraphsContent
  } = getUsefulData(document)

  return (
    document ?
      <StyledCurrentAnimalPage>
        <Helmet>
          <title>{title}</title>
          <meta
            name={`${title}`}
            content={'Displays current post'}
          />
        </Helmet>
        <StyledBackButton
          onClick={() => navigate(-1)}
        >
          GO BACK
        </StyledBackButton>
        <StyledImgContainer
          width={width}
          height={height}
        >
          <StyledImg
            src={imageUrl}
          />
        </StyledImgContainer>
        <StyledInfo>
          <StyledTitle>
            {title}
          </StyledTitle>
          <StyledShortText>
            {shortIntroduction}
          </StyledShortText>
          {
            paragraphsContent.map((paragraph, index) => {
              return (
                <StyledContent
                  key={`${index}/StyledContent`}
                >
                  {paragraph.text}
                </StyledContent>
              )
            })
          }
          <StyledPublicationDate>
            {creationDate}
          </StyledPublicationDate>
        </StyledInfo>
      </StyledCurrentAnimalPage>
      :
      null
  )
}

export default CurrentAnimalPage
