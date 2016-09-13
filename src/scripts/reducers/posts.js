import {RECEIVE_POSTS} from '../actions/posts';
import {ADD_POST, EDIT_POST} from '../actions/post';


const post = (state = {}, action) => {
	"use strict";
	switch (action.type) {

		default:
			return state
	}
}

const posts = (state = [], action) => {
	let { posts, data } = action;
	switch (action.type) {
		case RECEIVE_POSTS :
			return posts;

		case ADD_POST:
			return [
				data,
				...state
			]

		case EDIT_POST:
			return state.map( p =>
				p.id === action.id ? Object.assign({}, p, data) : p
			)
		default:
			return state
	}

};

export default posts;