import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../styles/index.css'
// 1
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

// 3
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
      <App/>
  </ApolloProvider>
)
