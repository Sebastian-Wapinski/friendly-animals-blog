import styled from 'styled-components'

const DefaultStyledSnippetPost = styled.div`

`

const StyledSnippetPost = styled(DefaultStyledSnippetPost)(
  props => props.style
)

export { StyledSnippetPost }
