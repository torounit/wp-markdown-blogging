import React from 'react'
import { connect } from 'react-redux'
import Codemirror from 'react-codemirror'
import { editContent } from '../actions/editor'

require('codemirror/mode/markdown/markdown');

const options = {
	lineNumbers: true,
	mode: 'markdown',
	lineWrapping: true,
	styleActiveLine: true,
	matchBrackets: true
}

const PostForm = ({ content = "", onChange } ) => (
	<div>
		<Codemirror value={content} onChange={onChange} options={options} />
	</div>
);


const mapStateToProps = (state) => {
	return {
		content: state.editor.content
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (content) => {
			dispatch(editContent(content));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostForm)
