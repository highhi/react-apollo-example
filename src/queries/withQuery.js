import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import omit from 'lodash.omit'

export default query => (
  Component => props => {
    const values = omit(props, ['variables'])

    return <Query query={gql(query)} variables={props.variables} children={({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error `${error.message}`</p>
      return <Component data={data} props={values} />
    }} />
  }
)
