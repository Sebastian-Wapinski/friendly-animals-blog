import { PrismicImage } from '@prismicio/react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import responsiveness from '../../components/style/responsiveness'

const DefaultStyledHomePage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 90rem;
padding: 3rem;

@media (max-width: ${responsiveness.mediumSize}) {
padding: 0.5rem;
}
`

const StyledHomePage = styled(DefaultStyledHomePage)(
  props => props.style
)

const StyledPrismicImage = styled(PrismicImage)`
max-width: 60rem;
max-height: 15rem;
border-radius: 50px;
`

const StyledPrismicTitle = styled.h1`
color: ${props => props.theme.primaryTextColor};
padding: 2rem 1rem;
font-size: 3rem;
text-align: center;
`

const StyledPrismicRichText = styled.p`
color: ${props => props.theme.primaryTextColor};
display: flex;
justify-content: center;
text-align: justify;
padding: 2rem 1rem;
width: 70%;
min-width: 20rem;

@media (max-width: ${responsiveness.mediumSize}) {
  width: 100%;
}
`

const StyledNav = styled.ul`
display: flex;
justify-content: center;
background-color: ${props => props.theme.forthBackground};
min-width: 100%;
border-radius: 25px;

@media (max-width: ${responsiveness.mediumSize}) {
  flex-direction: column;
  align-items: center;
}
`

const StyledNavLink = styled(NavLink)`
padding: 1rem 4rem;
display: flex;
justify-content: center;
text-decoration: none;
color: ${props => props.theme.primaryBackground};
transition: all 0.3s ease-in-out;


&.active {
background-color: ${props => props.theme.primaryBackground};
color: ${props => props.theme.forthBackground};
}

&:hover {
background-color: ${props => props.theme.primaryBackground};
color: ${props => props.theme.forthBackground};
}

@media (max-width: ${responsiveness.mediumSize}) {
  padding: 0.5rem 2rem;
  width: 100%;
}
`

export { StyledHomePage, StyledPrismicImage, StyledPrismicTitle, StyledPrismicRichText, StyledNav, StyledNavLink }
