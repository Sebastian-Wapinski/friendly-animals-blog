import styled from 'styled-components'

const DefaultStyledSnippetPostCategory = styled.div`

`

const StyledSnippetPostCategory = styled(DefaultStyledSnippetPostCategory)(
  props => props.style
)

export { StyledSnippetPostCategory }
