import {LOGGED_IN, LOGGED_OUT} from '../actions/login';

const auth = (state = {
	username: '',
	password: '',
	loggedIn: false,
	error: false
}, action) => {
	switch (action.type) {

		case LOGGED_IN :
			let {username, password, loggedIn, error} = action;
			return {
				username,
				password,
				loggedIn,
				error
			}

		case LOGGED_OUT :
			return {
				username: '',
				password: '',
				loggedIn: false,
				error: false
			}
		default:
			return state
	}
}

export default auth