import { LOGGED_IN ,LOGGED_OUT } from '../actions/login';

const auth = ( state = {
	username: '',
	password: '',
	loggedIn: false
}, action ) => {
	switch (action.type) {

		case LOGGED_IN :
			let { username, password, loggedIn } = action;
			return {
				username,
				password,
				loggedIn
			}

		case LOGGED_OUT :
			return {
				username: '',
				password: '',
				loggedIn: false
			}
		default:
			return state
	}
}

export default auth