import {OPEN_MENU,CLOSE_MENU} from "../actions/menu";
const menu = (state = {
	isOpen: true
}, action) => {

	switch (action.type) {

		case OPEN_MENU :
			return {
				isOpen: true
			}

		case CLOSE_MENU:
			return {
				isOpen: false
			}


		default:
			return state
	}

};

export default menu;