import withQuery from './withQuery'

export default withQuery(`{
  viewer { 
    id
    login
    avatarUrl
  }
}`)
