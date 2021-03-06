import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {

	constructor(props){
		super(props);

		this.state = {
			title: ''
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
		
		// mutation function returns a promise 
		this.props.mutate({
			variables: {
				title: this.state.title
			},
			refetchQueries: [{ query }]
		}).then(() => hashHistory.push('/'));
	};

	render() {
		return (
			<div>
				<Link to="/">Back </Link>
				<h3> Create new Song </h3>
				<form onSubmit={ (e) => this.onSubmit(e)}>
					<label> Song title: </label>
					<input 
						onChange={ event => this.setState({title: event.target.value}) }
						value={ this.state.title }
					 />
				</form>
			</div>
		);
	};
};

const mutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title){
			title
		}
	}
`;

export default graphql(mutation)(SongCreate);