import React from 'react'

import { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButton } from './FilterByDateForm.styled'
import { useLocation, useNavigate } from 'react-router'

export const FilterByDateForm = () => {
  const date = new Date().getDate()
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0')
  const year = new Date().getFullYear()
  const currentDate = `${year}-${month}-${date}`
  const [start, setStart] = React.useState(currentDate)
  const [end, setEnd] = React.useState(currentDate)

  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)

  return (
    <StyledFilterByDateForm
      onSubmit={(e) => {
        e.preventDefault()
        const startDate = e.target.startDate.value
        const endDate = e.target.endDate.value

        navigate(`${location.pathname}/${startDate}/${endDate}`)
      }}
    >
      <StyledLabel htmlFor={'startDate'}>
        STARTING DATE
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
        ENDING DATE
      </StyledLabel>
      <StyledInput
        type={'date'}
        id={'endDate'}
        name={'endDate'}
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      >
      </StyledInput>
      <StyledButton
        type={'submit'}
      >
        FILTER
      </StyledButton>
      <StyledButton
        onClick={() => {
          const deletingEndDate = location.pathname.slice(0, location.pathname.lastIndexOf('/')).slice()
          const deletingStartDate = deletingEndDate.slice(0, deletingEndDate.lastIndexOf('/'))

          console.log(location.pathname, 'reset')
          navigate(`${location.pathname}`)
        }}
      >
        RESET
      </StyledButton>
    </StyledFilterByDateForm>
  )
}

export default FilterByDateForm
