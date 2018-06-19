import withQuery from './withQuery'

export default withQuery(`{
  viewer {
    repositories(first: 10) {
      nodes {
        name
        id
        url 
      }
    }
  }
}`)