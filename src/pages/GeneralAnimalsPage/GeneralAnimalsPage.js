import React from 'react'
import PropTypes from 'prop-types'

import { StyledGeneralAnimalsPage } from './GeneralAnimalsPage.styled'

import SnippetPost from '../../components/SnippetPost/SnippetPost'
import Pagination from '../../components/Pagination/Pagination'
import { getUsefulData, returnNewLocation, sortDocument } from '../../helper/helper'
import FilterByDateForm from '../../components/FilterByDateForm/FilterByDateForm'
import { Helmet } from 'react-helmet-async'

export const GeneralAnimalsPage = (props) => {
  const {
    document,
    pageNum,
    startDate,
    endDate,
    location,
    metaTitle
  } = props

  const newLocation = returnNewLocation(location, startDate, endDate)

  const sortedThreats = React.useMemo(() => {
    return sortDocument(document, startDate, endDate)
  }, [document, endDate, startDate])

  return (
    sortedThreats ?
      <StyledGeneralAnimalsPage>
        <Helmet>
          <title>{metaTitle}</title>
          <meta
            name={`${metaTitle}`}
            content={`Display ${metaTitle}`}
          />
        </Helmet>
        <FilterByDateForm />
        <Pagination
          limit={3}
          path={newLocation}
          pageNum={Number(pageNum)}
          startDate={startDate}
          endDate={endDate}
        >
          {
        sortedThreats.map(post => {
          const processedData = getUsefulData(post)

          return (
            <SnippetPost
              key={post.id}
              postInfo={processedData}
            />
          )
        })
          }
        </Pagination>
      </StyledGeneralAnimalsPage>
      :
      null
  )
}

GeneralAnimalsPage.propTypes = {
  document: PropTypes.array,
  pageNum: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.object,
  metaTitle: PropTypes.string
}

export default GeneralAnimalsPage
