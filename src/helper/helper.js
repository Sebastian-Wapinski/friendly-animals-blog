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
      return (post.createdNewDate > startFilteringDate) && (post.createdNewDate < endFilteringDate)
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

export const navigateByDate = (navigate, location, startDate, endDate, navigationPatch = '') => {
  if (!!startDate === false && !!endDate === false) {
    const path = _sliceLastBackslash(location)
    navigate(`${path}/1${navigationPatch}`)
  } else {
    const path = _sliceThreeLastBackslashes(location)
    navigate(`${path}/1${navigationPatch}`)
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
  const date = new Date().getDate()
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0')
  const year = new Date().getFullYear()
  return `${year}-${month}-${date}`
}
