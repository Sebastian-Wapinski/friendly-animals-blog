import styled from 'styled-components'

const DefaultStyledGeneralAnimalsPage = styled.div`
width: 100%;
`

const StyledGeneralAnimalsPage = styled(DefaultStyledGeneralAnimalsPage)(
  props => props.style
)

export { StyledGeneralAnimalsPage }
