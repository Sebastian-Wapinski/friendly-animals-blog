import styled from 'styled-components'

const DefaultStyledAnimalsPage = styled.div`
width: 100%;
`

const StyledAnimalsPage = styled(DefaultStyledAnimalsPage)(
  props => props.style
)

export { StyledAnimalsPage }
