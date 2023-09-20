import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DefaultStyledSnippetPost = styled(Link)`
text-decoration: none;
`

const StyledSnippetPost = styled(DefaultStyledSnippetPost)(
  props => props.style
)

const StyledContainer = styled.div`
display: grid;
grid-template-columns: 2fr 3fr;
grid-template-rows: 15rem;
grid-template-areas: 'StyledImgContainerArea StyledInfoArea';
border-radius: 20px;
box-shadow: 0px 9px 35px -22px ${props => props.theme.forthBackground};
margin: 2rem 1rem;
transition: all 0.3s ease-in-out;
position: relative;

&:hover{
  cursor: pointer;
  box-shadow: 0px 20px 35px -22px ${props => props.theme.forthBackground};
  bottom: 5px;
  left: 0;
}

@media (max-width: 45.25rem) {
margin: 2rem 0;
grid-template-rows: 10rem;
}
`

const StyledImgContainer = styled.div`
grid-area: StyledImgContainerArea;
`

const StyledImg = styled.div`
background-image: url(${props => props.src});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
height: 100%;
border-radius: 20px;
`

const StyledInfo = styled.article`
grid-area: StyledInfoArea;
`

const StyledTitle = styled.h2`
color: ${props => props.theme.primaryTextColor};
text-align: center;
margin-bottom: 1rem;

@media (max-width: 45.25rem) {
font-size: 1.2rem;
}
`

const StyledParagraph = styled.p`
color: ${props => props.theme.primaryTextColor};
text-align: justify;
padding: 0 1rem;
display: -webkit-box;
-webkit-line-clamp: 7;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden;

@media (max-width: 45.25rem) {
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
padding: 0 1rem;
}
`
const StyledDate = styled.p`
color: ${props => props.theme.primaryTextColor};
font-size: 0.8rem;
padding: 1rem 1rem;
text-align: right;
`

export {
  StyledSnippetPost,
  StyledContainer,
  StyledImgContainer,
  StyledImg,
  StyledInfo,
  StyledTitle,
  StyledParagraph,
  StyledDate
}
