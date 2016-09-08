import React from 'react'
import { connect } from 'react-redux'
import { addPost, editPost } from '../actions/post'


const SavePostButton = ({ content, onClick }) => (
	<button type="submit" onClick={ () => onClick(content) }>Save Post</button>
);


const mapStateToProps = (state) => {
	return {
		content: state.editor.content
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (content) => {
			dispatch(addPost('api-test',content));
		}
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SavePostButton)
