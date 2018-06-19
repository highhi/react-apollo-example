import withQuery from './withQuery'

export default withQuery(`
  query($q: String!) {
    search(query: $q, first: 5, type: REPOSITORY) {
      nodes {
        ...Repos
      }
    }
  }

  fragment Repos on Repository {
    id
    name
    url
  }`
)