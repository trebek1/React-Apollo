import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {

	constructor(props){
		super(props);

		this.state = {
			title: ''
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div>
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