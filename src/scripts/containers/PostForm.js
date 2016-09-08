import React from 'react'
import { connect } from 'react-redux'
import Codemirror from 'react-codemirror'
import { editContent } from '../actions/editor'
import 'codemirror/mode/markdown/markdown'

const options = {
	lineNumbers: false,
	mode: 'markdown',
	lineWrapping: true,
	styleActiveLine: true,
	matchBrackets: true
}

const PostForm = ({  content = '' , onChangeContent } ) => (
	<Codemirror value={content} onChange={onChangeContent} options={options} />
);


const mapStateToProps = (state) => {
	return {
		content: state.editor.content
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeContent:(content) => {
			dispatch(editContent(content))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostForm)
