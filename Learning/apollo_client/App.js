/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: Web client with React
*/
import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

// Import global styles
import GlobalStyle from './components/GlobalStyle';
// Import Routes
import Pages from './pages';

/// Configure our API & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
