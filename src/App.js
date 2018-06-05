import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';

// set up apollo client
const client = new ApolloClient({
  uri: 'localhost:2626/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
