import styled from 'styled-components'

const DefaultStyledPagination = styled.div`
width: 100%;
`

const StyledPagination = styled(DefaultStyledPagination)(
  props => props.style
)

const StyledNav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
min-height: 5rem;
`

const StyledUl = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-areas: 'navLink navLink navLink navLink';
min-height: 5rem;
list-style-type: none;
`

const StyledError = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.primaryTextColor};
`

export { StyledPagination, StyledNav, StyledUl, StyledError }
