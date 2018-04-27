import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client'; // making request for data and storing locally 
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import SongCreate from './components/SongCreate';


import SongList from './components/SongList';

// could put config into {}
// assumes /graphql for graphql client 

const client = new ApolloClient({});

const Root = () => {
  return <ApolloProvider client={client}>
  	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={SongList} />
  			<Route path="songs/new" component={SongCreate} />
  		</Route>
  	</Router>
  </ApolloProvider>
};



ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
