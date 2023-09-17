import styled from 'styled-components'

const DefaultStyledApp = styled.div`
background-color: ${props => props.theme.primaryBackground};
width: 100%;
min-height: 100vh;

display: flex;
align-items: center;
flex-direction: column;
`

const StyledApp = styled(DefaultStyledApp)(
  props => props.style
)

export { StyledApp }
