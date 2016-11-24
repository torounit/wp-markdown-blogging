import React from 'react'
import { connect } from 'react-redux'
import { editTitle } from '../actions/editor'
import TitleInput from '../components/TitleInput'

const mapStateToProps = (state) => {
	return {
		title: state.editor.title,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeTitle:(event) => {
			dispatch( editTitle(event.target.value) )
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TitleInput)
