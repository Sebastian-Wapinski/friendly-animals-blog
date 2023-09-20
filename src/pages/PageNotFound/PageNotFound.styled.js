import styled from 'styled-components'

const DefaultStyledPageNotFound = styled.div`

`

const StyledPageNotFound = styled(DefaultStyledPageNotFound)(
  props => props.style
)

export { StyledPageNotFound }
