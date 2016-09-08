import React from 'react'
import { connect } from 'react-redux'
import { addPost, editPost } from '../actions/post'
import { Button } from 'rebass'

const SavePostButton = ({ title, content, onAddPost, onUpdatePost, id }) => (
	<Button
		type="submit"
		onClick={
			() => id ? onUpdatePost({ title, id, content }) : onAddPost({ title, content })
		}
	>{ id ? 'Update Post' : 'Add Post' }</Button>
);


const mapStateToProps = (state) => {
	return {
		title: state.editor.title,
		content: state.editor.content,
		id: state.editor.id
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPost: (data) => {
			dispatch(addPost(data));
		},
		onUpdatePost:(data) => {
			dispatch(editPost(data));
		}
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SavePostButton)
