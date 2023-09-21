import styled from 'styled-components'

const DefaultStyledFilteredTypeData = styled.div`

`

const StyledFilteredTypeData = styled(DefaultStyledFilteredTypeData)(
  props => props.style
)

export { StyledFilteredTypeData }
