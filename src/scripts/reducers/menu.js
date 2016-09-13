import {OPEN_MENU,CLOSE_MENU} from "../actions/menu";
import {TOGGLE_MENU} from "../actions/menu";
const menu = (state = {
	isOpen: false
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

		case TOGGLE_MENU:
			return {
				isOpen: !state.isOpen
			}


		default:
			return state
	}

};

export default menu;