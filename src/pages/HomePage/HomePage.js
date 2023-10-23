import React from 'react'

import { StyledHomePage, StyledPrismicImage, StyledPrismicTitle, StyledPrismicRichText, StyledNav, StyledNavLink } from './HomePage.styled'

import { Outlet, useLocation, useParams } from 'react-router-dom'

import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/react'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  const [document] = useSinglePrismicDocument('homepage')
  const location = useLocation()
  const { pageNum = 1, animalPageNum = 1, animalType } = useParams()

  const animalTypeUpper = animalType && animalType.toUpperCase()

  return (
    document ?
      <StyledHomePage>
        <Helmet>
          <title>Home Page</title>
          <meta
            name={'Home-page'}
            content={'description'}
          />
        </Helmet>
        <StyledPrismicImage field={document.data.blog_img} />
        <PrismicRichText
          field={document.data.pagetitle}
          components={{ heading1: ({ children }) => <StyledPrismicTitle>{children}</StyledPrismicTitle> }}
        />
        <StyledNav>
          {(
            document.data.navbar.map((navItem, index) => {
              const navbarName = navItem.navbar_tag_name

              const links = {
                HOME: '/',
                ANIMALS: `/all-animals/${pageNum}`,
                [animalTypeUpper]: `/${navItem.navbar_tag_link.uid}/${animalPageNum}`
              }

              return (
                <StyledNavLink
                  key={`${navItem.navbar_tag_name}-${index}`}
                  to={
                    links[navbarName] ?
                      links[navbarName]
                      :
                    `/${navItem.navbar_tag_link.uid}/1`
                  }
                >
                  {navItem.navbar_tag_name}
                </StyledNavLink>
              )
            })
          )}
        </StyledNav>
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
