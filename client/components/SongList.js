import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
	renderSongs(){
		return this.props.data.songs.map(song => {
			return <li className="collection-item" key={song.id}>
				{ song.title }
			</li>;
		});
	}
	render() {
		const { loading }  = this.props.data;
		if(loading){
			return <div> Loading... </div>;	
		}
		return <div> <ul className="collection">
			{ this.renderSongs() }
		</ul> 
		<Link to="/songs/new"
		className="btn-floating btn-large red right"
		>
		<i className="material-icons">add</i>
		</Link>
		</div>
	}
}

export default graphql(query)(SongList);

