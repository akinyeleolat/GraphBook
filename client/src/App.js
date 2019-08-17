import React from 'react';
import Album from './components/Album';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri:"http://localhost:8001/graphql"
});

const App = ()=> {
  return (
    <ApolloProvider client={client}>
   <Album/>
   </ApolloProvider>
  );
}

export default App;
