import React from 'react'

const createMarkup = ( content ) => {
	return { __html: content }
};

const MarkupPreview = ({ content = "" } ) => (
	<div dangerouslySetInnerHTML={createMarkup(content)} />
);

export default MarkupPreview;
