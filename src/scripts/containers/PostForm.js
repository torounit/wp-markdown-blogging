import React from 'react'
import { connect } from 'react-redux'
import { editContent } from '../actions/editor'
import Codemirror from '../components/Codemirror'

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
)(Codemirror)
