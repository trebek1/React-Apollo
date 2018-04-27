import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client'; // making request for data and storing locally 
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';

// could put config into {}
// assumes /graphql for graphql client 

// normalization with dataIdFromObject 
// record ID has to be unique 
// all queries need to return the IDs 
// using this way we do not need to make followup queries 
// this cuts the number of calls in half that are required 

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return <ApolloProvider client={client}>
  	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={SongList} />
  			<Route path="songs/new" component={SongCreate} />
        <Route path="songs/:id" component={SongDetail} />
  		</Route>
  	</Router>
  </ApolloProvider>
};



ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
