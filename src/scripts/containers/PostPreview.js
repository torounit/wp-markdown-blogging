import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import MarkupPreview from '../components/MarkupPreview'

const mapStateToProps = (state) => {
	return {
		content: marked(state.editor.content)
	}
}


export default connect(
	mapStateToProps
)(MarkupPreview)
