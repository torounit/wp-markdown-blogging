import { EDIT_CONTENT } from '../actions/editor';
import {ADD_POST} from "../actions/post";


const editor = (state = {
	id:0,
	content: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}, action ) => {

	switch (action.type) {

		case ADD_POST:
			let {data} = action;
			return Object.assign({}, state, { id: data.id });

		case EDIT_CONTENT :
			let { content } = action;
			return Object.assign({}, state, { content });

		default:
			return state
	}

};

export default editor;