import React from 'react'
import withSearchQuery from './queries/withSearchQuery'

const Item = ({ repo }) => (
  <p><a href={repo.url}>{repo.name}</a></p>
)

export default withSearchQuery(({ data }) => {
  const items = data.search.nodes.map(repo => <Item key={repo.id} repo={repo} />)
  return <div>{items}</div>
})