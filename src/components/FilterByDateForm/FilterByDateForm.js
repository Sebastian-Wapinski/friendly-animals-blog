import React from 'react'

import { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButtonSubmit, StyledButtonReset, StyledFilterContainer, StyledButtonContainer } from './FilterByDateForm.styled'
import { useLocation, useNavigate, useParams } from 'react-router'
import { createCurrentDate, navigateByDate } from '../../helper/helper'

export const FilterByDateForm = () => {
  const currentDate = createCurrentDate()

  const [start, setStart] = React.useState(currentDate)
  const [end, setEnd] = React.useState(currentDate)

  const navigate = useNavigate()
  const location = useLocation()
  const { startDate, endDate } = useParams()

  const navigateByDateSubmitted = (e) => {
    e.preventDefault()
    const startNewDate = e.target.startDate.value
    const endNewDate = e.target.endDate.value
    const navigationPath = `/${startNewDate}/${endNewDate}`

    navigateByDate(navigate, location, startDate, endDate, navigationPath)
  }

  const resetFilter = () => {
    navigateByDate(navigate, location, startDate, endDate)
  }

  return (
    <StyledFilterContainer>
      <StyledFilterByDateForm
        onSubmit={navigateByDateSubmitted}
      >
        <StyledLabel htmlFor={'startDate'}>
          STARTING DATE:
        </StyledLabel>
        <StyledInput
          type={'date'}
          id={'startDate'}
          name={'startDate'}
          value={start}
          onChange={(e) => setStart(e.target.value)}
        >
        </StyledInput>
        <StyledLabel htmlFor={'endDate'}>
          ENDING DATE:
        </StyledLabel>
        <StyledInput
          type={'date'}
          id={'endDate'}
          name={'endDate'}
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        >
        </StyledInput>
        <StyledButtonSubmit
          type={'submit'}
        >
          FILTER
        </StyledButtonSubmit>
      </StyledFilterByDateForm>
      <StyledButtonContainer>
        <StyledButtonReset
          onClick={resetFilter}
        >
          RESET
        </StyledButtonReset>
      </StyledButtonContainer>
    </StyledFilterContainer>
  )
}

export default FilterByDateForm
