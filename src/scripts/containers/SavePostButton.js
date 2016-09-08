import React from 'react'
import { connect } from 'react-redux'
import { addPost, editPost } from '../actions/post'


const SavePostButton = ({ content, onAddPost, onUpdatePost, id }) => (
	<button
		type="submit"
		onClick={
			() => id ? onUpdatePost({ title: 'hoge', id, content }) : onAddPost({ title: 'hoge', content })
		}
	>Save Post</button>
);


const mapStateToProps = (state) => {
	return {
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
