import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Album from './components/Album';
import client from './core/graphql';


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Album/>
    </ApolloProvider>
  );
};

export default App;
