import React from 'react'
import { connect } from 'react-redux'
import Codemirror from 'react-codemirror'
import { editTitle, editContent } from '../actions/editor'

require('codemirror/mode/markdown/markdown');

const options = {
	lineNumbers: true,
	mode: 'markdown',
	lineWrapping: true,
	styleActiveLine: true,
	matchBrackets: true
}

const PostForm = ({ title = '', content = '', onChangeTitle , onChangeContent } ) => (
	<div>
		<input type="text" defaultValue={title} onChange={onChangeTitle} />
		<Codemirror value={content} onChange={onChangeContent} options={options} />
	</div>
);


const mapStateToProps = (state) => {
	return {
		title: state.editor.title,
		content: state.editor.content
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeTitle:(event) => {
			dispatch( editTitle(event.target.value) )
		},
		onChangeContent:(content) => {
			dispatch(editContent(content))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostForm)
