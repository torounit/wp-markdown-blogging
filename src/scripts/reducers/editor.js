import { EDIT_CONTENT } from '../actions/editor';

const editor = (state = {
	content: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}, action ) => {

	switch (action.type) {

		case EDIT_CONTENT :
			let { content } = action;
			return {
				content
			};

		default:
			return state
	}

};

export default editor;