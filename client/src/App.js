import './App.css';
import DisplayData from './DisplayData';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your backend URL
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData></DisplayData>
      </div>
    </ApolloProvider>
  );
}

export default App;
