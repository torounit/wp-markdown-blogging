"use strict";
//Actions
export const EDIT_CONTENT = 'EDIT_CONTENT'

export const editContent = ( content ) => {
	return {
		type: EDIT_CONTENT,
		content
	}
}
