import * as prismic from '@prismicio/client'

export const repositoryName = 'task-react-routing-sw'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',
  routes: [
    {
      type: 'homepage',
      path: '/'
    }
  ]
})
