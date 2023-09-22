import styled from 'styled-components'

const DefaultStyledAnimalTypePage = styled.div`
width: 100%;
`

const StyledAnimalTypePage = styled(DefaultStyledAnimalTypePage)(
  props => props.style
)

export { StyledAnimalTypePage }
