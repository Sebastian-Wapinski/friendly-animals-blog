import React from 'react'

import { StyledAnimalsPage } from './AnimalsPage.styled'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

import SnippetPost from '../../components/SnippetPost'

export const AnimalsPage = () => {
  const [document] = useAllPrismicDocumentsByType('category')

  const animalsArr = document && document.flatMap((category) => {
    return category.data.animal_group.map(animal => {
      return animal
    })
  }, [])

  const animalsArrJSX = animalsArr && animalsArr.map(animal => {
    return (
      <SnippetPost
        key={animal.paste_links.id}
        postInfo={animal}
      />
    )
  })

  console.log(animalsArrJSX)

  return (
    <StyledAnimalsPage>
      {
        animalsArrJSX && animalsArrJSX.map(animal => {
          return animal
        })
      }
    </StyledAnimalsPage>
  )
}

export default AnimalsPage
