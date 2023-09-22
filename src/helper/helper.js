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
