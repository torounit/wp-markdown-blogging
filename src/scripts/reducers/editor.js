import {EDIT_CONTENT} from '../actions/editor';
import {EDIT_TITLE} from "../actions/editor";
import {ADD_POST, SELECT_POST, NEW_POST} from "../actions/post";

const initialState  = {
	id: 0,
	title: '',
	content: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
};

const editor = (state = initialState, action) => {

	switch (action.type) {

		case ADD_POST:
			let {data} = action;
			return Object.assign({}, state, {id: data.id});

		case EDIT_CONTENT :
			let {content} = action;
			return Object.assign({}, state, {content});

		case EDIT_TITLE :
			let {title} = action;
			return Object.assign({}, state, {title});

		case NEW_POST:
			return initialState;

		case SELECT_POST:
			//let { title, id, content } = action;
			return action
		default:
			return state
	}

};

export default editor;