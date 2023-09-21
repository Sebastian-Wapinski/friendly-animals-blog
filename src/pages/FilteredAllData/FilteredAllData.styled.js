import styled from 'styled-components'

const DefaultStyledFilteredAllData = styled.div`

`

const StyledFilteredAllData = styled(DefaultStyledFilteredAllData)(
  props => props.style
)

export { StyledFilteredAllData }
