import { RECEIVE_POSTS } from '../actions/posts';


const post =(state = {}, action ) => {
	"use strict";
	switch (action.type) {

		default:
			return state
	}
}

const posts = (state = [], action ) => {

	switch (action.type) {

		case RECEIVE_POSTS :
			let { posts } = action;
			return posts;

		default:
			return state
	}

};

export default posts;