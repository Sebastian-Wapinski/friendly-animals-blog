import React from 'react'

import { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButtonSubmit, StyledButtonReset, StyledFilterContainer, StyledButtonContainer } from './FilterByDateForm.styled'
import { useLocation, useNavigate, useParams } from 'react-router'

export const FilterByDateForm = () => {
  const date = new Date().getDate()
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0')
  const year = new Date().getFullYear()
  const currentDate = `${year}-${month}-${date}`
  const [start, setStart] = React.useState(currentDate)
  const [end, setEnd] = React.useState(currentDate)

  const navigate = useNavigate()
  const location = useLocation()
  const { startDate, endDate } = useParams()

  return (
    <StyledFilterContainer>
      <StyledFilterByDateForm
        onSubmit={(e) => {
          e.preventDefault()
          const startNewDate = e.target.startDate.value
          const endNewDate = e.target.endDate.value

          // console.log('submit')
          if (!!startDate === false && !!endDate === false) {
            const deletedPageNum = location.pathname.slice(0, location.pathname.lastIndexOf('/'))

            navigate(`${deletedPageNum}/1/${startNewDate}/${endNewDate}`)
          } else {
            const deletedEndDate = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
            const deletedStartDate = deletedEndDate.slice(0, deletedEndDate.lastIndexOf('/'))
            const deletedPageNum = deletedStartDate.slice(0, deletedStartDate.lastIndexOf('/'))

            navigate(`${deletedPageNum}/1/${startNewDate}/${endNewDate}`)
          }
        }}
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
          onClick={() => {
            if (!!startDate === false && !!endDate === false) {
              const deletedPageNum = location.pathname.slice(0, location.pathname.lastIndexOf('/'))

              navigate(`${deletedPageNum}/1`)
            } else {
              const deletedEndDate = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
              const deletedStartDate = deletedEndDate.slice(0, deletedEndDate.lastIndexOf('/'))
              const deletedPageNum = deletedStartDate.slice(0, deletedStartDate.lastIndexOf('/'))

              navigate(`${deletedPageNum}/1`)
            }
          }}
        >
          RESET
        </StyledButtonReset>
      </StyledButtonContainer>
    </StyledFilterContainer>
  )
}

export default FilterByDateForm
