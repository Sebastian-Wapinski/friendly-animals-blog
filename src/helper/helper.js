export const sortDocument = (document, startDate, endDate) => {
  if (!document) return null

  let startFilteringDate, endFilteringDate

  if (startDate && endDate) {
    startFilteringDate = new Date(startDate)
    endFilteringDate = new Date(endDate)
  }

  return document
    .map(post => {
      return {
        ...post,
        createdNewDate: new Date(post.data.date)
      }
    })
    .filter((post) => {
      if (typeof startFilteringDate === 'undefined' && typeof endFilteringDate === 'undefined') {
        return post
      }
      return (post.createdNewDate >= startFilteringDate) && (post.createdNewDate <= endFilteringDate)
    })
    .sort((a, b) => {
      return Number(b.createdNewDate) - Number(a.createdNewDate)
    })
}

const _sliceLastBackslash = (location) => location.pathname.slice(0, location.pathname.lastIndexOf('/'))

const _sliceThreeLastBackslashes = (location) => {
  const deletedEndDate = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
  const deletedStartDate = deletedEndDate.slice(0, deletedEndDate.lastIndexOf('/'))
  return deletedStartDate.slice(0, deletedStartDate.lastIndexOf('/'))
}

export const navigateByDate = (navigate, location, startDate, endDate, navigationPath = '') => {
  if (!!startDate === false && !!endDate === false) {
    const path = _sliceLastBackslash(location)
    navigate(`${path}/1${navigationPath}`)
  } else {
    const path = _sliceThreeLastBackslashes(location)
    navigate(`${path}/1${navigationPath}`)
  }
}

export const returnNewLocation = (location, startDate, endDate) => {
  if (typeof startDate === 'undefined' && typeof endDate === 'undefined') {
    return _sliceLastBackslash(location)
  } else {
    return _sliceThreeLastBackslashes(location)
  }
}

export const createCurrentDate = () => {
  const date = (new Date().getDate()).toString().padStart(2, '0')
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0')
  const year = new Date().getFullYear()
  return `${year}-${month}-${date}`
}

export const getUsefulData = (post) => {
  return {
    slugs: post.slugs,
    uid: post.uid,
    imageUrl: post.data.image_post.url,
    title: post.data.title_post[0].text,
    shortIntroduction: post.data.short_introduction,
    creationDate: post.data.date,
    width: post.data.image_post.dimensions.width,
    height: post.data.image_post.dimensions.height,
    paragraphsContent: post.data.content_post
  }
}
