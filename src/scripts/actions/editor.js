"use strict";
//Actions
export const EDIT_CONTENT = 'EDIT_CONTENT'
export const editContent = ( content ) => {
	return {
		type: EDIT_CONTENT,
		content
	}
}

export const EDIT_TITLE = 'EDIT_TITLE';
export const editTitle = ( title ) => {
	return {
		type: EDIT_TITLE,
		title
	}
}