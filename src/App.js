import React from 'react';
import { ApolloProvider } from 'react-apollo'
import Viewer from './Viewer'
import SearchForm from './SearcForm'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
        <div>
          <Viewer />
          <SearchForm />
        </div>
      </ApolloProvider>
    );
  }
}
