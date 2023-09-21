import React from 'react'

import { StyledHomePage, StyledPrismicImage, StyledPrismicTitle, StyledPrismicRichText, StyledNav, StyledNavLink } from './HomePage.styled'

import { Outlet, useLocation, useParams } from 'react-router-dom'

import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/react'
import FilterByDateForm from '../../components/FilterByDateForm/FilterByDateForm'

export const HomePage = () => {
  const [document] = useSinglePrismicDocument('homepage')
  const location = useLocation()
  const { pageNum = 1, animalPageNum = 1, animalType } = useParams()

  const animalTypeUpper = animalType && animalType.toUpperCase()

  return (
    document ?
      <StyledHomePage>
        <StyledPrismicImage field={document.data.blog_img} />
        <PrismicRichText
          field={document.data.pagetitle}
          components={{ heading1: ({ children }) => <StyledPrismicTitle>{children}</StyledPrismicTitle> }}
        />
        <StyledNav>
          {(
            document.data.navbar.map((navItem, index) => {
              const navbarName = navItem.navbar_tag_name
              return (
                <StyledNavLink
                  key={`${navItem.navbar_tag_name}-${index}`}
                  to={
                    navbarName === 'HOME' ?
                      '/' :
                      navbarName === 'ANIMALS' ?
                            `/all-animals/${pageNum}` :
                        navbarName === animalTypeUpper ?
                            `/${navItem.navbar_tag_link.uid}/${animalPageNum}` :
                            `/${navItem.navbar_tag_link.uid}/1`
                          }
                >
                  {navItem.navbar_tag_name}
                </StyledNavLink>
              )
            })
          )}
        </StyledNav>
        <FilterByDateForm />
        {
          location.pathname === '/' ?
            <PrismicRichText
              field={document.data.richtext}
              components={{ paragraph: ({ children }) => <StyledPrismicRichText>{children}</StyledPrismicRichText> }}
            />
            :
            null
        }
        <Outlet />
      </StyledHomePage>
      :
      null
  )
}

export default HomePage
