import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const options = {
	lineNumbers: true,
	mode: 'markdown'
}

const createMarkup = ( content ) => {
	return { __html: content }
};

const PostPreview = ({ content = "" } ) => (
	<div dangerouslySetInnerHTML={createMarkup(content)} />
);


const mapStateToProps = (state) => {
	return {
		content: marked(state.editor.content)
	}
}


export default connect(
	mapStateToProps
)(PostPreview)
