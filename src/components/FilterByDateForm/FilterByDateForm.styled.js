import styled from 'styled-components'

const DefaultStyledFilterByDateForm = styled.form`

`

const StyledFilterByDateForm = styled(DefaultStyledFilterByDateForm)(
  props => props.style
)

const StyledLabel = styled.label`

`

const StyledInput = styled.input`

`

const StyledButton = styled.button`

`

export { StyledFilterByDateForm, StyledLabel, StyledInput, StyledButton }
