import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {

	constructor(props){
		super(props);

		this.state = {
			content: ''
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
		// could use refetchQueries 
		// but lets do something different 
		this.props.mutate({
			variables: {
				content: this.state.content, 
				id: this.props.id
			}
		}).then(() => {
			this.setState({
				content: ''
			});
		});
	}

	render(){
		return (
			<form onSubmit={(e) => {this.onSubmit(e)}}> 
				<label> Add a lyric </label>
				<input onChange={(event) => { this.setState({content: event.target.value})}} value={this.state.content} />
			</form>
		);
	}
}

const mutation = gql`
	mutation CreateLyric($content: String, $id: ID){
	  addLyricToSong(content: $content, songId: $id){
	    id
	    title
	    lyrics {
	      id
	      content
	    }
	  }
	}
`;

export default graphql(mutation)(LyricCreate);



