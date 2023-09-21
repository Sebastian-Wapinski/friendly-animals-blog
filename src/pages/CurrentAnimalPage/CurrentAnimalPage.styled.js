import styled from 'styled-components'

const DefaultStyledCurrentAnimalPage = styled.div`
width: 100%;
max-width: 90rem;
padding: 0 3rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width: 45.25rem) {
  margin-top: 3rem; 
  padding: 1rem;
}
`

const StyledCurrentAnimalPage = styled(DefaultStyledCurrentAnimalPage)(
  props => props.style
)

const StyledBackButton = styled.button`
display: flex;
align-self: flex-start;

padding: 1rem 1.5rem;
margin: 2rem 0;
border-radius: 12px;
font-weight: 600;
background-color: ${props => props.theme.forthBackground};
color: ${props => props.theme.primaryBackground};
transition: all 0.3s ease-in-out;
border: 1px solid transparent;

@media (max-width: 45.25rem) {
  position: fixed;
  top: 0;
  left: 1rem;
  padding: 0.5rem;
  margin: 1rem 0;
  font-weight: 400;
  font-size: 0.8rem;
}

&:hover {
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.forthBackground};
  border: 1px solid ${props => props.theme.forthBackground};
  cursor: pointer;
}
`

const StyledImgContainer = styled.div`
max-width: ${props => `${props.width}px`};
max-height: ${props => `${props.height}px`};
`

const StyledImg = styled.img`
max-width: 50rem;
width: 100%;
height: 100%;
border-radius: 20px;
`

const StyledInfo = styled.div`

`

const StyledTitle = styled.h1`
color: ${props => props.theme.secondaryTextColor};
text-align: center;
margin: 2rem 0;
font-size: 3rem;

@media (max-width: 45.25rem) {
font-size: 2rem;
margin: 1rem 0;
}
`

const StyledShortText = styled.p`
color: ${props => props.theme.primaryTextColor};
font-size: 1.2rem;
text-align: justify;
padding: 1rem 1rem;
text-indent: 3rem;

@media (max-width: 45.25rem) {
padding: 1rem 0.5rem;
}
`

const StyledContent = styled.p`
color: ${props => props.theme.thirdTextColor};
text-align: justify;
padding: 1rem 1rem;
text-indent: 2rem;

@media (max-width: 45.25rem) {
padding: 1rem 0.5rem;
}
`

const StyledPublicationDate = styled.p`
color: ${props => props.theme.secondaryTextColor};
font-size: 1rem;
padding: 1rem 1rem;
text-align: right;
`

export {
  StyledCurrentAnimalPage,
  StyledBackButton,
  StyledImgContainer,
  StyledImg,
  StyledInfo,
  StyledTitle,
  StyledShortText,
  StyledContent,
  StyledPublicationDate
}
