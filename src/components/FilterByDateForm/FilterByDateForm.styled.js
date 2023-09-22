import styled from 'styled-components'
import Button from '../Button/Button'

const StyledFilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

@media (max-width: 45.25rem) {
flex-direction: column;
justify-content: center;
align-items: center;
}
`

const DefaultStyledFilterByDateForm = styled.form`
display: flex;
justify-content: space-around;
width: 100%;

@media (max-width: 45.25rem) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`

const StyledFilterByDateForm = styled(DefaultStyledFilterByDateForm)(
  props => props.style
)

const StyledLabel = styled.label`
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.primaryTextColor};
cursor: pointer;

@media (max-width: 45.25rem) {
  padding: 1rem 0;
}
`

const StyledInput = styled.input`
color: ${props => props.theme.primaryTextColor};
background-color: ${props => props.theme.primaryBackground};
font-size: 1rem;
cursor: pointer;

&::-webkit-calendar-picker-indicator { 
  filter: invert(60%);
  cursor: pointer;
}

@media (max-width: 45.25rem) {
  padding: 1rem 0;
}
`

const StyledButtonSubmit = styled(Button)`
margin: 0.5rem 0;
align-self: center;

@media (max-width: 45.25rem) {
  position: relative;
  top: 0;
  left: 0;
  padding: 0.8rem 4rem;
  margin: 1rem 0;
  font-weight: 600;
  font-size: 0.8rem;
}
`

const StyledButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 45.25rem) {
  justify-content: center;
}
`

const StyledButtonReset = styled(Button)`
padding: 0.5rem 1rem;
border-radius: 7px;
margin: 0;

@media (max-width: 45.25rem) {
  position: relative;
  top: 0;
  left: 0;
}
`

export { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButtonSubmit, StyledButtonReset, StyledFilterContainer, StyledButtonContainer }
