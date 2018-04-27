import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {

	render(){
		const { song } = this.props.data;
		if(!song){
			return (
				<h3> Loading... </h3>
			);
		}
		return (
			<div>
				<Link to="/"> Back </Link>
				<h3> { song.title } </h3>
				<LyricList lyrics={song.lyrics} />
				<LyricCreate id={this.props.params.id} />
			</div>
		);
	}
}

export default graphql(fetchSong, {
	options: (props) => { return { variables: {id: props.params.id } } }
})(SongDetail); 

// queries fetched automatically 
// mutations manually called 
// so how send id to query? 