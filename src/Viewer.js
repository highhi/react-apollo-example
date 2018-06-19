import React from 'react'
import withViewerQuery from './queries/withViewerQuery'

export default withViewerQuery(({ data, props }) => {
  return <div className={props.className}>
    <p>{data.viewer.login}</p>
    <p>{data.viewer.id}</p>
    <img src={data.viewer.avatarUrl} alt="avatar" />
  </div>
})
