import React from 'react'

import { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButtonReset } from './FilterByDateForm.styled'
import { useLocation, useNavigate, useParams } from 'react-router'
import { createCurrentDate, navigateByDate } from '../../helper/helper'

export const FilterByDateForm = () => {
  const currentDate = createCurrentDate()

  const [start, setStart] = React.useState(currentDate)
  const [end, setEnd] = React.useState(currentDate)

  const navigate = useNavigate()
  const location = useLocation()
  const { startDate, endDate } = useParams()

  const navigatedByDateChange = (e) => {
    const formElem = e.target.parentElement

    const { startDate: startFilteredDate } = formElem
    const { endDate: endFilteredDate } = formElem

    const startDateValue = startFilteredDate.value
    const endDateValue = endFilteredDate.value

    const navigationPath = `/${startDateValue}/${endDateValue}`

    navigateByDate(navigate, location, startDate, endDate, navigationPath)
  }

  const resetFilter = (e) => {
    e.preventDefault()
    navigateByDate(navigate, location, startDate, endDate)
  }

  return (
    <StyledFilterByDateForm>
      <StyledLabel htmlFor={'startDate'}>
        STARTING DATE:
      </StyledLabel>
      <StyledInput
        type={'date'}
        id={'startDate'}
        name={'startDate'}
        value={start}
        onChange={(e) => {
          navigatedByDateChange(e)
          setStart(e.target.value)
        }}
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
        onChange={(e) => {
          navigatedByDateChange(e)
          setEnd(e.target.value)
        }}
      >
      </StyledInput>
      <StyledButtonReset
        onClick={resetFilter}
      >
        RESET
      </StyledButtonReset>
    </StyledFilterByDateForm>
  )
}

export default FilterByDateForm
