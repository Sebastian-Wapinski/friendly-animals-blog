import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DefaultStyledPagination = styled.div`

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

const StyledLink = styled(NavLink)`
text-decoration: none;
display: block;
padding: 1rem 1rem;
margin: 1rem 0.5rem;
border-radius: 10px;
color: ${props => props.theme.primaryTextColor};
background-color: ${props => props.theme.secondaryBackground};
transition: all 0.3s ease-in-out;
grid-area: navLink;

&:hover {
  background-color: ${props => props.theme.forthBackground};
  color: ${props => props.theme.primaryBackground};
}

&.active{
  background-color: ${props => props.theme.forthBackground};
  color: ${props => props.theme.primaryBackground};
}
`

export { StyledPagination, StyledNav, StyledUl, StyledLink }
