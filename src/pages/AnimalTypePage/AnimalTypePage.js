import React from 'react'

import { StyledAnimalTypePage } from './AnimalTypePage.styled'
import { useLocation, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByTag } from '@prismicio/react'
import GeneralAnimalsPage from '../GeneralAnimalsPage/GeneralAnimalsPage'

export const AnimalTypePage = () => {
  const { startDate, endDate, animalType, animalPageNum } = useParams()

  const [document] = useAllPrismicDocumentsByTag(animalType)

  const location = useLocation()

  return (
    <StyledAnimalTypePage>
      <GeneralAnimalsPage
        document={document}
        pageNum={animalPageNum}
        startDate={startDate}
        endDate={endDate}
        location={location}
        metaTitle={animalType}
      />
    </StyledAnimalTypePage>
  )
}

export default AnimalTypePage
