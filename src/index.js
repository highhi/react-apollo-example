import React from 'react'
import ReactDOM from 'react-dom'
import ApolloCLient from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
require('dotenv').config()

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    }
  }));

  return forward(operation);
})

const client = new ApolloCLient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <App client={client} />,
  document.getElementById('root')
);
