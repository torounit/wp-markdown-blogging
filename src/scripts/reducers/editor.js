import { EDIT_CONTENT } from '../actions/editor';
import {ADD_POST} from "../actions/post";
import {EDIT_TITLE} from "../actions/editor";


const editor = (state = {
	id:0,
	title: '',
	content: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}, action ) => {

	switch (action.type) {

		case ADD_POST:
			let {data} = action;
			return Object.assign({}, state, { id: data.id });

		case EDIT_CONTENT :
			let { content } = action;
			return Object.assign({}, state, { content });

		case EDIT_TITLE :
			let { title } = action;
			return Object.assign({}, state, { title });


		default:
			return state
	}

};

export default editor;