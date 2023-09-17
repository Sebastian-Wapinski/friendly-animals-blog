import React from 'react'

import { StyledHomePage, StyledPrismicImage, StyledPrismicTitle, StyledPrismicRichText, StyledNav, StyledNavLink } from './HomePage.styled'

import { Outlet, useLocation } from 'react-router-dom'

import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/react'

export const HomePage = () => {
  const [document] = useSinglePrismicDocument('homepage')
  const location = useLocation()

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
                  to={navbarName === 'HOME' ? '/' : `/animals/${navItem.navbar_tag_link.uid}`}
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
