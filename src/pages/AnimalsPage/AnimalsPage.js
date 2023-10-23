import React from 'react'

import { StyledAnimalsPage } from './AnimalsPage.styled'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useLocation, useParams } from 'react-router'
import GeneralAnimalsPage from '../GeneralAnimalsPage/GeneralAnimalsPage'

export const AnimalsPage = () => {
  const { pageNum, startDate, endDate } = useParams()
  const [document] = useAllPrismicDocumentsByType('post')
  const location = useLocation()

  return (
    <StyledAnimalsPage>
      <GeneralAnimalsPage
        document={document}
        pageNum={pageNum}
        startDate={startDate}
        endDate={endDate}
        location={location}
        metaTitle={'All Animals'}
      />
    </StyledAnimalsPage>
  )
}

export default AnimalsPage
