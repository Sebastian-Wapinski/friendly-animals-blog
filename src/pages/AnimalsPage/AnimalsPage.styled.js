import styled from 'styled-components'

const DefaultStyledAnimalsPage = styled.div`

`

const StyledAnimalsPage = styled(DefaultStyledAnimalsPage)(
  props => props.style
)

export { StyledAnimalsPage }
