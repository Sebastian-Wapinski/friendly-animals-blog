import styled from 'styled-components'

const DefaultStyledAnimalTypePage = styled.div`

`

const StyledAnimalTypePage = styled(DefaultStyledAnimalTypePage)(
  props => props.style
)

export { StyledAnimalTypePage }
