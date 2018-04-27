import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
	onSongDelete(id){
		// use refetch instead of recalling the graphql get query
		// refetch calls queries associated with SongList component 
		// does query again on the server and sends to frontend
		this.props.mutate({ variables: { id }}).then(() => this.props.data.refetch());
	}
	renderSongs(){
		return this.props.data.songs.map(({id, title}) => {

			return <li className="collection-item" key={id}>
				{ title } 
				<i className="material-icons" onClick={() => {this.onSongDelete(id)}}>delete</i>
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

const mutation = gql`mutation DeleteSong($id: ID){
  	deleteSong(id: $id){
    id
    title
  }
}`;



export default graphql(mutation)(
	graphql(query)(SongList)
);

