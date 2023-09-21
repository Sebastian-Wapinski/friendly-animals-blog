export const sortDocument = (document) => {
  if (!document) return null

  return document
    .map(post => {
      return {
        ...post,
        createdNewDate: new Date(post.data.date)
      }
    })
    .sort((a, b) => {
      return Number(b.createdNewDate) - Number(a.createdNewDate)
    })
}
