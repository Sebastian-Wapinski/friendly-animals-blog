import React from 'react'
import { PrismicImage, PrismicRichText, useSinglePrismicDocument } from '@prismicio/react'

const App = () => {
  const [document] = useSinglePrismicDocument('homepage')

  console.log(document)

  return (
    <div>
      {document && (<PrismicImage field={document.data.blog_img} />)}
      {document && (<PrismicRichText field={document.data.pagetitle} />)}
      {document && (<PrismicRichText field={document.data.richtext} />)}
    </div>
  )
}

export default App
