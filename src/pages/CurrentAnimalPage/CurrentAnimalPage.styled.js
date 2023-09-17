import styled from 'styled-components'

const DefaultStyledCurrentAnimalPage = styled.div`

`

const StyledCurrentAnimalPage = styled(DefaultStyledCurrentAnimalPage)(
  props => props.style
)

export { StyledCurrentAnimalPage }
