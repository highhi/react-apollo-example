import React from 'react'
import withReposQuery from './queries/withReposQuery'

export default withReposQuery(({ data }) => {
  const repos = data.viewer.repositories.nodes.map(repo => {
    return <li key={repo.id}><a href={repo.url}>{repo.name}</a></li>
  })

  return <ul>{repos}</ul>
})
