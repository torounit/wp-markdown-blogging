import React from 'react'
import { connect } from 'react-redux'
import Codemirror from 'react-codemirror'
import { editTitle } from '../actions/editor'
import { Button, Input } from 'rebass'


const TitleForm = ({ title, onChangeTitle } ) => (
	<div>
		<input
			label=""
			name="title"
			defaultValue={title}
			onChange={onChangeTitle}
			style={{
				fontSize: '2em',
				width: '100%',
				padding: '0 16px',
				outline: 'none'
			}}
		/>
	</div>
);


const mapStateToProps = (state) => {
	return {
		title: state.editor.title,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeTitle:(event) => {
			dispatch( editTitle(event.target.value) )
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TitleForm)
