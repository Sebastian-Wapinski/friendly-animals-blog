import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const DefaultPaginationNavItem = styled.li`

`

const StyledPaginationNavItem = styled(DefaultPaginationNavItem)(
  props => props.style
)

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

export { StyledPaginationNavItem, StyledLink }
