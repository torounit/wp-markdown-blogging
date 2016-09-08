"use strict";

export const ADD_POST = 'ADD_POST'

export const addPost = ( { title, content }) => {

	return {
		type: ADD_POST,
		title,
		content
	}

}

export const EDIT_POST = 'EDIT_POST';
export const editPost = ( { id, title, content } ) => {

	return {
		type: EDIT_POST,
		id,
		title,
		content
	}

}
