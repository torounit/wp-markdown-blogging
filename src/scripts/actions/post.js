"use strict";
import WP from '../../../node_modules/wpapi/browser/wpapi';


//Actions
export const VIEW_POST = 'VIEW_POST'

export const viewPost = (  id ) => {
	return {
		type: VIEW_POST,
		id
	}
}

export const ADD_POST = 'ADD_POST'
export const addPost = ( title, content ) => {
	return {
		type: ADD_POST,
		title,
		content
	}
}