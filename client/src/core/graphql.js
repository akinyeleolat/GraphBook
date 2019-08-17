import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8001/graphql' : '/graphql';


const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});


export default client;
