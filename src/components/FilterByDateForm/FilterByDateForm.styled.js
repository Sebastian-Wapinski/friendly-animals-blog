import styled from 'styled-components'
import Button from '../Button/Button'
import responsiveness from '../style/responsiveness'

const DefaultStyledFilterByDateForm = styled.form`
display: flex;
justify-content: space-around;
width: 100%;
margin: 1rem 0;

@media (max-width: ${responsiveness.mediumSize}) {
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

@media (max-width: ${responsiveness.mediumSize}) {
  padding: 0.6rem 0;
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
`

const StyledButtonReset = styled(Button)`
padding: 0.5rem 1rem;
border-radius: 12px;
margin: 0;
align-self: center;

@media (max-width: ${responsiveness.mediumSize}) {
  justify-content: center;
  padding: 0.5rem 3rem;
  margin: 0.3rem 0.5rem;
  font-weight: 600;
  font-size: 0.8rem;
  width: 100%;
}
`

export { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButtonReset }
